import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AddVisa from "../pages/AddVisa";
import AllVisas from "../pages/AllVisas";
import PrivetRoute from "./PrivetRoute";
import VisasDetails from "../pages/VisasDetails";
import MyVisa from "../pages/MyVisa";
import VisaApplications from "../pages/VisaApplications";
import Page404 from "../pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://b10-a10-server-side-mdtayef001.vercel.app/visasLimit"),
        // fetch("http://localhost:5000/visasLimit");
      },
      {
        path: "/add-visa",
        element: (
          <PrivetRoute>
            <AddVisa />
          </PrivetRoute>
        ),
      },
      {
        path: "/all-visas",
        element: <AllVisas />,
        loader: () =>
          fetch("https://b10-a10-server-side-mdtayef001.vercel.app/visas"),
      },
      {
        path: "/visas/:id",
        element: (
          <PrivetRoute>
            <VisasDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mdtayef001.vercel.app/visas/${params.id}`
            // `http://localhost:5000/visas/${params.id}`
          ),
      },
      {
        path: "/my-visa/:email",
        element: (
          <PrivetRoute>
            <MyVisa />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mdtayef001.vercel.app/users/${params.email}`
          ),
      },
      {
        path: "/visaApplications/:email",
        element: (
          <PrivetRoute>
            <VisaApplications />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mdtayef001.vercel.app/users/${params.email}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
export default router;
