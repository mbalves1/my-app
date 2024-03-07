<template>
  <div class="mx-2">
    <div class="mt-2">
      <div v-for="(recipe, rx) in data" :key="rx" class="border rounded-xl border-zinc-300 gap-2 mt-2">
        <div class="flex justify-between p-6">
          <p>{{ recipe.type }}</p>
          <p>{{ recipe.sum }}</p>
          <p>{{ recipe.createdAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const token = localStorage.getItem('access')

const { fecthSnack } = useSnack()

const data = ref([])

onMounted(() => {
  getAllRecipes()
})

const getAllRecipes = async () => {
  try {
    const response = await fecthSnack(token)
    console.log(response);
    data.value = response;
  } catch (error) {
    console.error(error);
  }
}

</script>