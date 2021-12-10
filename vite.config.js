import { defineConfig } from "vite";
import path from "path";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // include: path.resolve(__dirname, "./path/to/src/locales/**"),
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
});
