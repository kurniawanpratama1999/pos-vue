import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const categoryRoute: RouteRecordRaw = {
  path: "category",
  children: [
    {
      path: "",
      name: "category",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "category.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "category.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
