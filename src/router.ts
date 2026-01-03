import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import { userRoute } from "@/pages/user/user.route";
import { roleRoute } from "./pages/role/role.route";
import { urlRoute } from "./pages/url/url.route";
import { productRoute } from "./pages/product/product.route";
import { variantRoute } from "./pages/variant/variant.route";
import { categoryRoute } from "./pages/category/category.route";
import { discountRoute } from "./pages/discount/discount.route";
import { conditionRoute } from "./pages/condition/condition.route";
import { permissionRoute } from "./pages/permission/permission.route";

import TransactionLayout from "./layouts/TransactionLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";

import Login from "@/pages/auth/Login.vue";
import Cashier from "./pages/transaction/Cashier.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "login",
        component: Login,
      },
    ],
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "login",
    children: [
      userRoute,
      roleRoute,
      urlRoute,
      productRoute,
      variantRoute,
      categoryRoute,
      discountRoute,
      conditionRoute,
      permissionRoute,
    ],
  },
  {
    path: "/transaction",
    component: TransactionLayout,
    children: [
      {
        path: "",
        name: "transaction",
        component: Cashier,
      },
      {
        path: "detail",
        name: "detail",
        component: Cashier,
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes,
});
