<template>
  <div class="mx-2">
    <div class="mt-2">
      <div
        v-for="(recipe, rx) in data"
        :key="rx"
        class="border rounded-xl border-zinc-300 gap-2 mt-2 hover:shadow-xl">
        <div class="flex justify-between p-6">
          <div>
            <p class="text-xl">{{ recipe.type }}</p>
            <div class="text-xs ml-2">
              <p>{{ formatDate(recipe.createdAt) }}</p>
            </div>
            <p class="font-bold">Contagem: {{ recipe.sum }}</p>
          </div>
          <Icon
            name="basil:trash-alt-outline"
            class="font-bold w-6 h-6 text-red-500 cursor-pointer ml-2"
            @click="remove(recipe)"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const token = localStorage.getItem('access')

const { createSnack, fecthSnack, removeSnack } = useSnack()

const data = ref([])

const emit = defineEmits(['loadingSave'])
const props = defineProps({
  snackProps: {
    type: Object
  },
})

onMounted(() => {
  getAllRecipes()
})

watch(props, async (payload: any) => {
  try {
    await saveSnack(payload.snackProps)
    emit('loadingSave', true)
    await getAllRecipes()
  } catch (error) {
    console.error(error);
  }
})

const getAllRecipes = async () => {
  try {
    const response = await fecthSnack(token)
    data.value = response;
  } catch (error) {
    console.error(error);
  }
}

async function saveSnack(payload: any) {
  try {
    const response = await createSnack(token, payload)
    await getAllRecipes()
    return response
  } catch (error) {
    console.error(error);
  }
}

async function remove(recipe: any) {
  try {
    const resp = await removeSnack(token, recipe._id)
    await getAllRecipes()
    return resp
  } catch (error) {
    console.error(error);
  }
}

</script>