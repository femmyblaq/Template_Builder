import VueRouter from "vue-router";
import Vue from "vue";

import Home from "./views/Home.vue";
import TheLayout from "./layouts/TheLayout.vue";
import Save from "./layouts/Saveforlater.vue";
import Categories from "./layouts/Categories.vue";
import Account from "./layouts/Account.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home, name: "Home" },

  {
    path: "/dashboard",
    component: TheLayout,
    name: "Dashboard",
    children: [
      { path: "/save", component: Save, name: "Save" },
      { path: "/account", component: Account, name: "Account" },
      { path: "/categories", component: Categories, name: "Categories" },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
