<template>
  <div class="flex justify-between sm:py-10 py-3 sm:px-2 px-5 bg-zinc-200">
    <div class="cursor-pointer" @click="backTo">
      <Icon name="lucide:move-left" class="w-6 h-6"></Icon>
    </div>
    <div>{{ page }}</div>
    <div class="cursor-pointer" @click="open(page)">
      <Icon name="gg:add-r" class="w-6 h-6"></Icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
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