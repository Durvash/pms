import { lazy } from "react";
const Dashboard = lazy(() => import("./modules/Dashboard"));
const Login = lazy(() => import("./guest/Login"));
const Signup = lazy(() => import("./guest/Signup"));
const ForgotPassword = lazy(() => import("./guest/ForgotPassword"));
const ThankYou = lazy(() => import("./guest/ThankYou"));
const VerifyEmail = lazy(() => import("./guest/VerifyEmail"));
const accountSetup = lazy(() => import("./guest/accountSetup"));
const TaskList = lazy(() => import("./modules/TaskList"));

const RouteList = [
  {
    path: "/",
    component: Login,
    allowWithoutLogin: true,
  },
  {
    path: "/signup",
    component: Signup,
    allowWithoutLogin: true,
  },
  {
    path: "/thank-you",   /// after signup, will redirect to thank you page
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
    path: "/account-setup/:page",
    component: accountSetup,
    allowWithoutLogin: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    allowWithoutLogin: false,
  },
  {
    path: "/tasks",
    component: TaskList,
    allowWithoutLogin: false,
  },
];

export { RouteList };
