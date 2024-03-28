// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/devtools"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["UseFetchDemo"].includes(tag),
    },
  },
  runtimeConfig: {
    public: {
      graphqlUrl: "https://26.208.233.92/",
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      preload: ["javascript", "vue", "html"],
      theme: "monokai",
    },
  },
});
