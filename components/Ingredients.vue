<template>
  <div class=" h-[100vh]">
    <Table class="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="">Nome</TableHead>
          <TableHead>Carb</TableHead>
          <TableHead>Qdd</TableHead>
          <TableHead class="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, ix) in data" :key="ix">
          <TableCell class="font-medium">
            {{ item.name }}
          </TableCell>
          <TableCell>{{ item.carbvalue }}</TableCell>
          <TableCell>
            {{ item.quantityvalue }}
          </TableCell>
          <TableCell class="text-right">
            <Icon
              name="basil:trash-alt-outline"
              class="font-bold w-6 h-6 text-red-500 cursor-pointer"
              @click="remove(item)"></Icon>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<script setup lang="ts">

// const { token } = useAuth()
const { getIngredients, deleteIngredient, createIngredient } = useIngredient()

interface Item {
  name: string;
  type: string;
  carbvalue: number;
  quantityvalue: number;
}

const props = defineProps({
  ingredientProps: {
    type: Object
  },
})

watch(props, async (payload: any) => {
  try {
    await save(payload.ingredientProps)
    await getAll()
  } catch (error) {
    console.error(error);
  }
})

const token = localStorage.getItem('access')

const data = ref<Item[]>([]);

onMounted(async () => {
  await getAll()
})

async function getAll() {
  try {
    const response = await getIngredients(token)
    data.value = response
    return response
  }
  catch (error) {
    console.error(error);
  }
}

async function save(payload: Item) {
  try {
    const response = await createIngredient(token, payload)
    getAll()
    return response
  } catch (error) {
    console.error(error);
  }
}

async function remove(item: any) {
  try {
    await deleteIngredient(token, item._id)
    getAll()
    return
  }
  catch(error) {
    console.error(error);
  }
}

</script>
