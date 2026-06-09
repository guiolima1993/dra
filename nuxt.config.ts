// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    server: {
      strictPort: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    exclude: ['useLocale'],
  },
  css: [
    '@fontsource/cormorant-garamond/latin-400.css',
    '@fontsource/cormorant-garamond/latin-500.css',
    '@fontsource/cormorant-garamond/latin-600.css',
    '@fontsource/cormorant-garamond/latin-700.css',
    '@fontsource/inter/latin-300.css',
    '@fontsource/inter/latin-400.css',
    '@fontsource/inter/latin-500.css',
    '@fontsource/inter/latin-600.css',
    '@fontsource/montserrat/latin-400.css',
    '@fontsource/montserrat/latin-500.css',
    '@fontsource/montserrat/latin-600.css',
    '@fontsource/montserrat/latin-700.css',
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Dra. Anayene Craveiro — Método FUE + Implantação Direta®',
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-588WBSX5');`,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-588WBSX5" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
        },
      ],
    },
  },
})
