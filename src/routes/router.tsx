import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/login", element: <Login /> },
]);
