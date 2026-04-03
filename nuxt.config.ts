// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    devtools: { enabled: true },

    ssr: false,

    modules: [
        "@nuxt/eslint",
        "@nuxtjs/google-fonts",
        "@nuxtjs/tailwindcss",
        "@vee-validate/nuxt",
        "@vesp/nuxt-fontawesome",
    ],

    googleFonts: {
        families: {
            "Roboto Mono": true,
        },
    },

    fontawesome: {
        icons: {
            regular: ["folder"],
            solid: ["circle-info", "cloud-arrow-up", "file-arrow-up"],
        },
    },
});
