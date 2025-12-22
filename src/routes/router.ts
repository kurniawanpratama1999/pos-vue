import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { authRouter } from "./authRouter";
import { dashRouter } from "./dashRouter";
import { authenticate } from "../libs/Authenticate";

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
  } else {
    next();
  }
});

export { router };
