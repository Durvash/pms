import { lazy } from "react";
const Dashboard = lazy(() => import("./modules/Dashboard"));
const Login = lazy(() => import("./guest/Login"));
const Signup = lazy(() => import("./guest/Signup"));
const ForgotPassword = lazy(() => import("./guest/ForgotPassword"));

const RouteList = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export { RouteList };
