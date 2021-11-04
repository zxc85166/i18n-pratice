import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
// import messages from "@intlify/vite-plugin-vue-i18n/messages";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import zh_TW from "@/locales/zh_TW.json";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ja,
    zh_TW,
  },
});
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(i18n);
app.mount("#app");
