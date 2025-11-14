import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import Error from "../Pages/Error";
import MyRatings from "../Pages/MyRatings";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgetPassword from "../Component/ForgetPassword";
import PrivateRoute from "./PrivateRoutes";
import EstatesDetails from "../Component/EstatesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <p className="absolute top-52">Loading.....</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://homenest-server-eight.vercel.app/home-features"),
      },
      {
        path: "/properties",
        element: <AllProperties></AllProperties>,
        loader: () => fetch("https://homenest-server-eight.vercel.app/estates"),
      },
      {
        path: "/add-property",
        element: (
          <PrivateRoute>
            <AddProperties></AddProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-ratings",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>,
          </PrivateRoute>
        ),
      },
      {
        path: "/estates-details/:id",
        element: (
          <PrivateRoute>
            <EstatesDetails></EstatesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://homenest-server-eight.vercel.app/estates/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },

      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
