<template>
  <div>
    <Card class="sm:w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="Name of your project" v-model="payload.email" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input id="password" placeholder="Password of your project" v-model="payload.password"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex px-6 pb-6 w-full">
        <Button @click="logIn">
          <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
          <span v-else>Login</span>
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
<script setup lang='ts'>
import { Loader2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'login'
})

const { login } = useAuth()
const loading = ref(false)

const payload = ref({
  email: 'bi@email',
  password: '123'
})

const logIn = async () => {
  loading.value = true
  try {
    const response = await login(payload.value)
    navigateTo({ path: '/home'})
    loading.value = false
    return response
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}

</script>