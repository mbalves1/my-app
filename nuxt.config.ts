// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components: {
    // Habilita o auto-importação para os componentes em `./components`
    global: true,
    dirs: [
      {
        path: './components',
        // Opcional: especifique extensões de arquivos
        extensions: ['vue', 'ts']
      }
    ]
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  lucide: {
    autoimport: true,
  },
})
