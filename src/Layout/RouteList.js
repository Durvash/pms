import { lazy } from "react";
const Dashboard = lazy(() => import("./modules/Dashboard"));
const Login = lazy(() => import("./guest/Login"));
const Logout = lazy(() => import("./modules/Logout"));
const Signup = lazy(() => import("./guest/Signup"));
const ForgotPassword = lazy(() => import("./guest/ForgotPassword"));
const ThankYou = lazy(() => import("./guest/ThankYou"));
const VerifyEmail = lazy(() => import("./guest/VerifyEmail"));

const RouteList = [
  {
    path: "/",
    component: Login,
    allowWithoutLogin: true,
  },
  {
    path: "/logout",
    component: Logout,
    allowWithoutLogin: false,
  },
  {
    path: "/signup",
    component: Signup,
    allowWithoutLogin: true,
  },
  {
    path: "/thank-you",
    component: ThankYou,
    allowWithoutLogin: true,
  },
  {
    path: "/verify-email",
    component: VerifyEmail,
    allowWithoutLogin: true,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    allowWithoutLogin: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    allowWithoutLogin: false,
  },
];

export { RouteList };
