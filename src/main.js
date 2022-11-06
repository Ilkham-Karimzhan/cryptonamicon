import { createApp } from "vue";
import * as VueWorker from "vue-worker";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).use(VueWorker).mount("#app");
