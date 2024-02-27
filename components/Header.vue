<template>
  <div class="flex justify-between sm:py-10 py-3 sm:mx-2 mx-5">
    <div @click="backTo"><--</div>
    <div>{{ page }}</div>
    <div @click="open(page)">+</div>
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