export default defineNuxtRouteMiddleware(async (to, from) => {
  // const user = useAuth()

  // no lado do servidor não tem acesso ao localstorage
  const user = window.localStorage.getItem('access')
  if (user === '') {
    return navigateTo('/')
  }
})