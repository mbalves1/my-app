<template>
  <div class="sm:w-[500px] w-full">
    <h3 class="sm:text-xl my-10 ml-10 sm:ml-0" v-if="!tabsViewer">Olá, escolha por onde começar!</h3>
    <div class="flex sm:flex-row flex-col justify-center items-center gap-6" v-if="!tabsViewer">
      <div
        class="flex rounded-md w-10/12 h-[200px] items-center justify-center bg-zinc-100 hover:bg-white hover:border-2 flex-col hover:font-bold cursor-pointer active:bg-green-200"
        @click="getIn(1)"
      >
        <!-- <Carrot class="w-10 h-10 mr-2"></Carrot> -->
        <span class="sm:text-xl mt-2">Ingredientes</span>
      </div>
      <div
        class="flex rounded-md w-10/12 h-[200px] items-center justify-center bg-zinc-100 hover:bg-white hover:border-2 flex-col hover:font-bold cursor-pointer active:bg-green-200"
        @click="getIn(2)"
      >
        <!-- <UtensilsCrossed class="w-10 h-10 mr-2"></UtensilsCrossed> -->
        <span class="sm:text-xl mt-2">Receitas</span>
      </div>
    </div>
    <div v-else class="flex flex-col justify-between">
      <Header
        :page="view ? 'Ingredientes' : 'Receitas'"
        @back-view="goBackView"
        @open-modal="openModal"
      ></Header>
      <component :is="view ? 'Ingredients' : 'Recipes'"></component>
    </div>
  </div>
  <div class="index-1 w-full h-[100vh] absolute flex items-center justify-center bg-opacity-50 bg-zinc-100" v-if="openModalIngredients"
  transition name="fade">
    <div class="relative">
      <ModalAddIngredients @close-modal="close"></ModalAddIngredients>
    </div>
  </div>
  <div class="index-1 w-full h-[100vh] absolute flex items-center justify-center bg-opacity-50 bg-zinc-100" v-if="openModalRecipes"
  transition name="fade">
    <div class="relative">
      <ModalAddRecipes @close-modal="close"></ModalAddRecipes>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { UtensilsCrossed, Carrot } from 'lucide-vue-next'

// Habilitar depois de resolver o problema do middleware
// definePageMeta({
//   middleware: 'account'
// })

const view = ref(false)
const tabsViewer = ref(false)
const openModalIngredients = ref(false)
const openModalRecipes = ref(false)

const getIn = (viewer: number) => {
  tabsViewer.value = true
  return viewer === 1 ? view.value = true : view.value = false 
}

function goBackView() {
  tabsViewer.value = false
}

const openModal = (page: string) => {
  console.log(page)
  if (page === 'Ingredientes') return openModalIngredients.value = true
  if (page === 'Receitas') return openModalRecipes.value = true
}

function close(event: boolean) {
  openModalIngredients.value = event
  openModalRecipes.value = event
}

</script>