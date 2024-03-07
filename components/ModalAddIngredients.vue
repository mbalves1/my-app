<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create Ingredient</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Ingrediente</Label>
            <Input
              id="name"
              placeholder="Nome do ingrediente"
              v-model="payload.name"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="type">Tipo</Label>
            <Input
              id="type"
              placeholder="Tipo da refeição (ex: Prato, Bebida)"
              v-model="payload.type"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="carbvalue">Carb</Label>
            <Input
              id="carbvalue"
              placeholder="Valores de carbo (0.123)"
              v-model="payload.carbvalue"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="unity">Unidade</Label>
            <Input
              id="unity"
              placeholder="Unidade utilizada (g)"
              v-model="payload.unity"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="quantityvalue">Qdd</Label>
            <Input
              id="quantityvalue"
              placeholder="Quantidade (1)"
              v-model="payload.quantityvalue"
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline" @click="closeModal">
        Fechar
        <Icon name="solar:close-square-linear" class="w-6 h-6 ml-2"></Icon>
      </Button>
      <Button @click="save">
        Salvar
        <Icon name="circum:save-up-2" v-if="!loading" class="w-6 h-6 ml-2"></Icon>
        <Icon name="line-md:loading-loop" v-if="loading" class="w-4 h-4 mr-2 animate-spin"></Icon>
      </Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
// import { XCircle, Send } from 'lucide-vue-next'

const emit = defineEmits(['closeModal', 'saveIngredient'])
const loading = ref(false)

const props = defineProps({
  laoding: {
    type: Boolean
  },
})

const payload = ref({
  name: '',
  type: '',
  carbvalue: '',
  unity: '',
  quantityvalue: ''
})

const closeModal = () => {
  emit('closeModal', false)
}

const save = () => {
  loading.value = true
  emit('saveIngredient', payload.value)
  loading.value = props.laoding
}
</script>