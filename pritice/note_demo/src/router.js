import { createRouter, createWebHashHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";

const routes = [
  { path: "/", name: "grid", component: NoteGrid },
  { path: "/Add", name: "AddNote", component: AddNote },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
