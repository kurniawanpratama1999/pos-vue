import AuthLayout from "../layouts/AuthLayout.vue";
import Login from "../pages/auth/Login.vue";

export const authRoutes = {
  path: "/",
  component: AuthLayout,
  children: [
    {
      path: "",
      redirect: "login",
    },
    {
      path: "login",
      component: Login,
    },
  ],
};
