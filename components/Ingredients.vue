<template>
  <div class=" h-[100vh] m-3">
    <Table class="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow class="border-zinc-400">
          <TableHead class="">Nome</TableHead>
          <TableHead>Carb</TableHead>
          <TableHead>Qdd</TableHead>
          <TableHead class="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, ix) in data" :key="ix" class="border-zinc-300">
          <TableCell class="font-medium">
            {{ item.name }}
          </TableCell>
          <TableCell>{{ item.carbvalue.$numberDecimal }}</TableCell>
          <TableCell>
            {{ item.quantityvalue }}
          </TableCell>
          <TableCell class="text-right">
            <Icon
              v-if="loadingIndex === ix"
              name="line-md:loading-loop"
              class="w-4 h-4 mr-2 animate-spin"></Icon>
            <Icon
              v-else
              name="basil:trash-alt-outline"
              class="font-bold w-6 h-6 text-red-500 cursor-pointer"
              @click="remove(item, ix)"></Icon>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['loadingSave'])
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

const loadingIndex = ref(null)

watch(props, async (payload: any) => {
  try {
    await save(payload.ingredientProps)
    emit('loadingSave', true)
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

async function remove(item: any, index: number) {
  try {
    loadingIndex.value = index
    await deleteIngredient(token, item._id)
    loadingIndex.value = null
    getAll()
    return
  }
  catch(error) {
    console.error(error);
  }
}

</script>
