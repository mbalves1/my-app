<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create Recipe</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="type">Tipo da refeição</Label>
            <Input id="type" placeholder="Café da manhã ou nome de referência" />
          </div>
          <div class="max-h-[200px] overflow-auto touch-auto scroll-smooth px-5">
            <div v-for="(ingredient, ix) in ingredients" :key="ix">
              <div class="flex items-center gap-3 mb-2">
                <Checkbox></Checkbox>
                <p>{{ ingredient.name }}</p>
              </div>
            </div>
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
        <Icon name="circum:save-up-2" class="w-6 h-6 ml-2"></Icon>
      </Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
const emit = defineEmits(['closeModal', 'saveRecipes'])

const { getIngredients } = useIngredient()
const token = localStorage.getItem('access')

const closeModal = () => {
  emit('closeModal', false)
}

const ingredients = ref([]);

onMounted(async () => {
  await getAll()
})

async function getAll() {
  try {
    const response = await getIngredients(token)
    ingredients.value = response
    return response
  }
  catch (error) {
    console.error(error);
  }
}

const save = () => {
  emit('saveRecipes', true)
}

</script>