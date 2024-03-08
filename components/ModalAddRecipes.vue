<template>
  <Card class="w-[350px]">
    <CardHeader>
      <div class="flex justify-between items-center gap-4">
        <CardTitle>Refeição</CardTitle>
        <CardSubtitle>valor: {{ payloadSnacks.sum }}</CardSubtitle>
      </div>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="type">Tipo da refeição</Label>
            <Input
              id="type"
              placeholder="Café da manhã ou nome de referência"
              v-model="payloadSnacks.type"
            />
          </div>
          <div class="max-h-[200px] overflow-auto touch-auto scroll-smooth px-5">
            <div v-for="(ingredient, ix) in ingredients" :key="ix">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <Checkbox
                    v-model="ingredient._id" @update:checked="handleChange(ingredient)" />
                  <p>{{ ingredient.name }}</p>
                </div>
                <div>
                  <p>{{ ingredient.carbvalue.$numberDecimal }}</p>
                </div>
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
        <Icon
          v-if="!loading"
          name="circum:save-up-2"
          class="w-6 h-6 ml-2"></Icon>
        <Icon
          v-if="loading"
          name="line-md:loading-loop"
          class="w-4 h-4 mr-2 animate-spin"></Icon>
      </Button>
    </CardFooter>
  </Card>
</template>
<script lang="ts" setup>
// import { Check } from 'lucide-vue-next';

const emit = defineEmits(['closeModal', 'saveRecipes'])
const props = defineProps({
  loadingProps: {
    type: Boolean
  },
})
const loading = ref(false)

const { getIngredients } = useIngredient()
const { createSnack, fecthSnack } = useSnack()

const closeModal = () => {
  emit('closeModal', false)
}

const payloadSnacks = ref({
  type: '',
  items: [],
  sum: 0
})

const ingredients = ref([]);
const token = localStorage.getItem('access')

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

const handleChange = (ingredient: any) => {
  const itemId = ingredient;
  const itemIndex = payloadSnacks.value.items.indexOf(itemId);

  if (itemIndex !== -1) {
    payloadSnacks.value.items.splice(itemIndex, 1);
  } else {
    payloadSnacks.value.items.push(itemId);
  }
  
  let totalCarbs = 0;
  payloadSnacks.value.items.forEach(item => {
    const carbValue = item.carbvalue.$numberDecimal;
    const quantityValue = item.quantityvalue;
    totalCarbs += carbValue * quantityValue;
  });

  payloadSnacks.value.sum = totalCarbs;
}

const save = async () => {
  const payload = {
    ...payloadSnacks.value
  }
  loading.value = true
  emit('saveRecipes', payload)
  loading.value = props.loadingProps
  const snacks = await fecthSnack(token)
}

</script>