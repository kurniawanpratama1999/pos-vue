import type { RouteRecordRaw } from "vue-router";
import Cashier from "./Cashier.vue";

export const transactionRoute: RouteRecordRaw = {
  path: "transaction",
  children: [
    {
      path: "",
      name: "transaction",
      component: Cashier,
    },
  ],
};
