// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      // Add your link tag here
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
        },
      ],
    },
  },
  // auto import components
  components: true,
  modules: ["@element-plus/nuxt", "@nuxtjs/i18n"],
  vite: {
    plugins: [
      Components({
        dts: true,
      }),
    ],
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  css: ["~/assets/scss/main.scss"],
});
