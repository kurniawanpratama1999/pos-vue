import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { authRouter } from "@/routes/authRouter";
import { dashRouter } from "@/routes/dashRouter";
import { authenticate } from "@/libs/Authenticate";

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
  } else {
    next();
    return;
  }
});

export { router };
