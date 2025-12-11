import DashboardLayout from "../layouts/DashboardLayout.vue";
import User from "../pages/dashboard/User.vue";

export const dashboardRoutes = {
  path: "/dashboard",
  component: DashboardLayout,
  children: [
    {
      path: "",
      redirect: { name: "user" },
    },
    {
      path: "user",
      name: "user",
      component: User,
    },
  ],
};
