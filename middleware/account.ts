export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useAuth()
  if (user.token === '') {
    return navigateTo('/')
  }
})