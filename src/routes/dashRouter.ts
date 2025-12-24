import type { RouteRecordRaw } from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import UserDataTable from "../pages/dashboard/user/DataTable.vue";
import UserFormCreateUpdate from "../pages/dashboard/user/FormCreateUpdate.vue";
import RoleDataTable from "../pages/dashboard/role/DataTable.vue";
import RoleFormCreateUpdate from "../pages/dashboard/role/FormCreateUpdate.vue";

const dashRouter: RouteRecordRaw = {
  path: "/dashboard",
  component: DashboardLayout,
  meta: { auth: true },
  children: [
    {
      path: "",
      redirect: { name: "user" },
      name: "dashboard",
    },

    {
      path: "user",
      children: [
        {
          path: "",
          component: UserDataTable,
          name: "user",
        },
        {
          path: "create",
          component: UserFormCreateUpdate,
          name: "user.create",
        },
        {
          path: ":id/show",
          component: UserFormCreateUpdate,
          name: "user.show",
        },
      ],
    },

    {
      path: "role",
      children: [
        {
          path: "",
          component: RoleDataTable,
          name: "role",
        },
        {
          path: "create",
          component: RoleFormCreateUpdate,
          name: "role.create",
        },
        {
          path: ":id/show",
          component: RoleFormCreateUpdate,
          name: "role.show",
        },
      ],
    },
  ],
};

export { dashRouter };
