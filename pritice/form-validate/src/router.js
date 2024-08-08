import { createRouter, createWebHashHistory } from "vue-router";
import PiniaStore from "./components/PiniaStore.vue";
import Register from "./components/Register.vue";
import DataSend from "./components/DataSend.vue";
import Axios from "./components/AxiosDemo.vue";

const routes = [
  { path: "/", name: "pinia", component: PiniaStore },
  { path: "/Register", name: "Register", component: Register },
  { path: "/DataSend", name: "DataSend", component: DataSend },
  { path: "/Axios", name: "PPP", component: Axios },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
