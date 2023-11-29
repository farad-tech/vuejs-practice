import { createRouter, createWebHistory} from 'vue-router';
import Home from "./pages/Home.vue"
import templateUser from "./pages/users/Template.vue"
import indexUser from "./pages/users/Index.vue"
import showUser from "./pages/users/Show.vue"

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/users", name: "users", component: templateUser, children: [
    {path: "", name: "users", component: indexUser},
    {path: ":id", name: "userId", component: showUser}
  ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;