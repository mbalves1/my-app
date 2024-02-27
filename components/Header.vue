<template>
  <div class="flex justify-between sm:py-10 py-3 sm:px-2 px-5 bg-zinc-200">
    <div @click="backTo">
      <MoveLeft class="w-3 h3"></MoveLeft>
    </div>
    <div>{{ page }}</div>
    <div @click="open(page)">
      <PlusSquare></PlusSquare>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MoveLeft, PlusSquare } from 'lucide-vue-next'

const props = defineProps({
  page: { type: String, default: 'Titulo' },
})

const emit = defineEmits(['backView', 'openModal'])

const backTo = () => {
  emit('backView', false)
}

const open = (page: string) => {
  emit('openModal', page)
}
</script>