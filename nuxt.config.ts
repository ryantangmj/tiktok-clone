// nuxt.config.ts
export default defineNuxtConfig({
  // ... other Nuxt config options ...

  generate: {
    routes: ['/sell', '/shop', ], // Define the custom routes
  },

  modules: [
    'nuxt-icon', 
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});
