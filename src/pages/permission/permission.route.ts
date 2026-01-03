import type { RouteRecordRaw } from "vue-router";
import permission from "./Permission.vue";

export const permissionRoute: RouteRecordRaw = {
  path: "permission",
  children: [
    {
      path: "",
      name: "permission",
      component: permission,
    },
  ],
};
