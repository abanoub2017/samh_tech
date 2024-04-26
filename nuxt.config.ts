// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
export default defineNuxtConfig({
  devtools: { enabled: true },
  // auto import components
  components: true,
  modules: ["@element-plus/nuxt"],
  vite: {
    plugins: [
      Components({
        dts: true,
      }),
    ],
  },
});
