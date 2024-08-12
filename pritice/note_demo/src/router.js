import { createRouter, createWebHashHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";
import EditNote from "./components/EditNote.vue";

const routes = [
  { path: "/", name: "grid", component: NoteGrid },
  { path: "/Add", name: "AddNote", component: AddNote },
  { path: "/edit/:id", name: "edit", props: true, component: EditNote },
  //為什麼要props: true?
  //加在 Vue Router 中，當你為一個路由設置 props: true 時，這表示你希望將路由參數（例如 :id）作為 props 傳遞給該路由對應的組件。這樣做可以讓你的組件更簡潔，更容易測試和重用，因為組件可以直接通過 props 來接收參數，而不需要在組件中通過 $route 來訪問這些參數。
  //path: "/edit/:id"：這個路由的路徑是 /edit/:id，其中 :id 是一個動態路由參數。當用戶訪問 /edit/123 時，id 的值將會是 123。

  //props: true：這表示將路由參數作為 props 傳遞給 EditNote 組件。也就是說，當這個路由被匹配時，EditNote 組件將會收到一個名為 id 的 props，其
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
