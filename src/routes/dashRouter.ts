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
      component: UserDataTable,
      name: "user",
    },
    {
      path: "user/create",
      component: UserFormCreateUpdate,
      name: "user.create",
    },
    {
      path: "user/:id/show",
      component: UserFormCreateUpdate,
      name: "user.show",
    },
    {
      path: "role",
      component: RoleDataTable,
      name: "role",
    },
    {
      path: "role/create",
      component: RoleFormCreateUpdate,
      name: "role.create",
    },
    {
      path: "role/:id/show",
      component: RoleFormCreateUpdate,
      name: "role.show",
    },
  ],
};

export { dashRouter };
