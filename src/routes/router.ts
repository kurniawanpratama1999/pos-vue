import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

const routes = [authRoutes, dashboardRoutes];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
