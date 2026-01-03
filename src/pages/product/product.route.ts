import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const productRoute: RouteRecordRaw = {
  path: "product",
  children: [
    {
      path: "",
      name: "product",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "product.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "product.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
