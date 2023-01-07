import { lazy } from "react";
const Login = lazy(() => import("./Guest/Login"));
const Signup = lazy(() => import("./Guest/Signup"));
const ForgotPassword = lazy(() => import("./Guest/ForgotPassword"));

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
];

export { RouteList };
