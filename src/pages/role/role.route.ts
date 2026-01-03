import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const roleRoute: RouteRecordRaw = {
  path: "role",
  children: [
    {
      path: "",
      name: "role",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "role.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "role.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
