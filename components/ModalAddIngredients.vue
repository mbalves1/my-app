<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create Ingredient</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Name</Label>
            <Input id="name" placeholder="Nome do ingrediente" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="type">Tipo</Label>
            <Input id="type" placeholder="Tipo da refeição" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="carbvalue">Carb</Label>
            <Input id="carbvalue" placeholder="Valores de carbo" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="unity">Unidade</Label>
            <Input id="unity" placeholder="Unidade utilizada" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="quantityvalue">Qdd</Label>
            <Input id="quantityvalue" placeholder="Quantidade" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline" @click="closeModal">
        Cancel
      </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal', false)
}
</script>