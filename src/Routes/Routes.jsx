import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3>Create error page</h3>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
