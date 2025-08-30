import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth/register", element: <Register /> },
]);
