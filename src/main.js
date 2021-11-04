import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(i18n);
app.mount("#app");
