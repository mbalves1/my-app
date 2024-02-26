<template>
  <div class="sm:w-[500px]">
    <h3 class="text-xl mb-10">Olá, escolha por onde começar!</h3>
    <div class="flex justify-center gap-6">
      <div
        class="flex  rounded-md w-10/12 h-[200px] items-center justify-center bg-zinc-100 hover:bg-white hover:border-2 flex-col hover:font-bold cursor-pointer"
        @click="getIn(1)"
      >
        <Carrot class="w-10 h-10 mr-2"></Carrot>
        <span class="sm:text-xl mt-2">Ingredientes</span>
      </div>
      <div
        class="flex rounded-md w-10/12 h-[200px] items-center justify-center bg-zinc-100 hover:bg-white hover:border-2 flex-col hover:font-bold cursor-pointer"
        @click="getIn(2)"
      >
        <UtensilsCrossed class="w-10 h-10 mr-2"></UtensilsCrossed>
        <span class="sm:text-xl mt-2">Receitas</span>
      </div>
    </div>
  </div>
  <div>
    <div v-if="view">
      <Ingredients></Ingredients>
    </div>
    <div v-else>
      <Recipes></Recipes>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UtensilsCrossed, Carrot } from 'lucide-vue-next'

definePageMeta({
  middleware: 'account'
})

const view = ref(false)

const getIn = (viewer: number) => {
  console.log(viewer)
  return viewer === 1 ? view.value = true : view.value = false 
}

</script>