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
              placeholder="Tipo da refeição"
              v-model="payload.type"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="carbvalue">Carb</Label>
            <Input
              id="carbvalue"
              placeholder="Valores de carbo"
              v-model="payload.carbvalue"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="unity">Unidade</Label>
            <Input
              id="unity"
              placeholder="Unidade utilizada"
              v-model="payload.unity"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="quantityvalue">Qdd</Label>
            <Input
              id="quantityvalue"
              placeholder="Quantidade"
              v-model="payload.quantityvalue"
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline" @click="closeModal">
        Fechar
        <XCLose></XCLose>
      </Button>
      <Button @click="save">
        Salvar
        <Send></Send>
      </Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
import { XClose, Send } from 'lucide-vue-next'

const emit = defineEmits(['closeModal', 'saveIngredient'])

const payload = ref({
  name: 'Maca',
  type: 'cafe',
  carbvalue: '12',
  unity: 'g',
  quantityvalue: '1234'
})

const closeModal = () => {
  emit('closeModal', false)
}

const save = () => {
  emit('saveIngredient', payload.value)
}
</script>