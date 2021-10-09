import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import "./assets/site.scss";

createApp(App).use(router).mount("#app");
