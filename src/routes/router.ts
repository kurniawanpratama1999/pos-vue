import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { authRouter } from "@/routes/authRouter";
import { dashRouter } from "@/routes/dashRouter";
import { authenticate } from "@/libs/Authenticate";
import { useAlertStore } from "@/store/useAlertStore";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: { name: "login" } },
  authRouter,
  dashRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const isAuth = await authenticate();
  if (to.name !== "login" && !isAuth) {
    next({ name: "login" });
    return;
  } else if (to.name == "login" && isAuth) {
    next({ name: "dashboard" });
    return;
  } else {
    next();
    return;
  }
});

export { router };
