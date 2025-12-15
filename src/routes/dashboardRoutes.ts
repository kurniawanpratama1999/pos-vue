import DashboardLayout from "../layouts/DashboardLayout.vue";
import UserLayout from "../pages/dashboard/user/Layout.vue";
import UserTable from "../pages/dashboard/user/Table.vue";
import UserForm from "../pages/dashboard/user/Form.vue";

export const dashboardRoutes = {
  path: "/dashboard",
  component: DashboardLayout,
  children: [
    {
      path: "",
      redirect: { name: "user.index" },
    },
    {
      path: "user",
      name: "user.layout",
      component: UserLayout,
      children: [
        {
          path: "",
          name: "user.index",
          component: UserTable,
        },
        {
          path: "create",
          name: "user.create",
          component: UserForm,
        },
        {
          path: ":id/show",
          name: "user.show",
          component: UserForm,
        },
      ],
    },
  ],
};
