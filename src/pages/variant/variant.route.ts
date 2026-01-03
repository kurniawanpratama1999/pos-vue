import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const variantRoute: RouteRecordRaw = {
  path: "variant",
  children: [
    {
      path: "",
      name: "variant",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "variant.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "variant.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
