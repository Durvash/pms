import { lazy } from "react";
const Login = lazy(() => import("./Guest/Login"));
const Signup = lazy(() => import("./Guest/Signup"));

const RouteList = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "signup",
    component: Signup,
  },
];

export { RouteList };
