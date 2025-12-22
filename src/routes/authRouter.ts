import type { RouteRecordRaw } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import Login from "../pages/auth/Login.vue";

const authRouter: RouteRecordRaw = {
  path: "/auth",
  component: AuthLayout,
  meta: { auth: true },
  children: [
    { path: "", name: "auth", redirect: { name: "login" } },
    { path: "login", component: Login, name: "login" },
  ],
};

export { authRouter };
