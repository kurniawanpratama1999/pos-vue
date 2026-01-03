import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const userRoute: RouteRecordRaw = {
  path: "user",
  children: [
    {
      path: "",
      name: "user",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "user.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "user.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};
