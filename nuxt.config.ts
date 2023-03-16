export default defineNuxtConfig({
  css: ['~~/assets/css/styles.css'],
  runtimeConfig: {
    public: {
      useMock: true,
    },
  },
  ssr: false,
  nitro: {
    preset: 'service-worker',
  },
});
