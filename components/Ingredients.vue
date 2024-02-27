<template>
  <div class=" h-[100vh]">
    <Table class="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="">Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Carb</TableHead>
          <TableHead class="text-right">Qdd</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, ix) in data" :key="ix">
          <TableCell class="font-medium">
            {{ item.name }}
          </TableCell>
          <TableCell>{{ item.type }}</TableCell>
          <TableCell>{{ item.carbvalue }}</TableCell>
          <TableCell class="text-right">
            {{ item.quantityvalue }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<script setup lang="ts">

const { token } = useAuth()
const { getIngredients } = useIngredient()

interface Item {
  name: string;
  type: string;
  carbvalue: number;
  quantityvalue: number;
}

const data = ref<Item[]>([]);

onMounted(() => {
  getAll()
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

</script>
