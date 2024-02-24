<template>
  <div class="">
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
        <Button @click="logIn">Login</Button>
      </CardFooter>
    </Card>
  </div>
</template>
<script setup lang='ts'>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const { login } = useAuth()

const payload = ref({
  email: 'bi@email',
  password: '123'
})

const logIn = async () => {
  try {
    const response = await login(payload.value)
    console.log('Logged in', response)
  } catch (error) {
    console.error(error)
  }
}

</script>