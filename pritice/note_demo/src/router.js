import { createRouter, createWebHashHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";

const routes = [{ path: "/", name: "grid", component: NoteGrid }];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
