import { createRouter, createWebHistory} from 'vue-router';
import Home from "./pages/Home.vue"
import templateUser from "./pages/users/Template.vue"
import indexUser from "./pages/users/Index.vue"
import showUser from "./pages/users/Show.vue"
import templatePost from "./pages/posts/Template.vue";
import indexPost from "./pages/posts/Index.vue";
import showPost from "./pages/posts/Show.vue";
import CreatePost from "./pages/posts/Create.vue";
import EditPost from "./pages/posts/Edit.vue";


const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/users", name: "templateUser", component: templateUser, children: [
    {path: "", name: "users", component: indexUser},
    {path: ":id", name: "userId", component: showUser}
  ]},
  {path: "/posts", name: "templatePost", component: templatePost, children: [
    {path: "", name: "posts", component: indexPost},
    {path: ":id", name: "postId", component: showPost},
    {path: "create", name: "postCreate", component: CreatePost},
    {path: "edit/:id", name: "postEdit", component: EditPost},
  ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;