import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import UpdatToy from "../Pages/UpdatToy/UpdatToy";
import PrivateRoute from "../Private/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        // loader: () => fetch(`https://lego-play-server.vercel.app/allToys`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addAToy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/singleToyDetails/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lego-play-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: (
          <PrivateRoute>
            <UpdatToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lego-play-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
    errorElement: <Error />,
  },
]);
