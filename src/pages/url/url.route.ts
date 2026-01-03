import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const urlRoute: RouteRecordRaw = {
  path: "url",
  children: [
    {
      path: "",
      name: "url",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "url.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "url.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
