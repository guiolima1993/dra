// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    server: {
      strictPort: false,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Dra. Araquele — Método FUE & Implantação DirecF',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Domine o método de transplante capilar que se tornou destaque internacionalmente.',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.cdnfonts.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/montserrat',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/cormorant-garamond',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },
})
