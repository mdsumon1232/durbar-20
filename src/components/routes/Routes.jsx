import { createBrowserRouter } from "react-router-dom";
import AboutEditor from "../../admin/about/AboutEditor";
import Admin_request from "../../admin/admin-data/Admin_request";
import Login from "../../admin/authentication/login/login";
import SignUp from "../../admin/authentication/signUp/SignUp";
import BlogList from "../../admin/blogList/BlogList";
import Dashboard from "../../admin/dashbord/Dashboard";
import PrivateDashboard from "../../admin/privateDashboard/PrivateDashboard";
import TextEditor from "../../admin/textEditor/TextEditor";
import Blog from "../../pages/blog/Blog";
import DonarList from "../../pages/DonarList/DonarList";
import Home from "../../pages/home/Home";
import SingleBlog from "../../pages/singleBlog/SingleBlog";
import FindBlood from "../findBlod/FindBlood";
import LoderDonar from "../loderDonar/LoderDonar";
import MainLayout from "../mainLayout/MainLayout";
import Registration from "../registration/Registration";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "donar",
        element: <DonarList />,
        loader: LoderDonar,
      },
      {
        path: "found",
        element: <FindBlood />,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: () => fetch("http://localhost/durbar-20-client/blogLoad.php"),
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(
            `http://localhost/durbar-20-client/singleBlog.php?id=${params.id}`
          ),
      },
    ],
  },
  {
    path: "/admin/register",
    element: <SignUp />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateDashboard>
        <Dashboard />
      </PrivateDashboard>
    ),
    children: [
      {
        path: "/dashboard/request",
        element: <Admin_request />,
        loader: () =>
          fetch("http://localhost/durbar-20-client/admin_pending.php"),
      },
      {
        path: "/dashboard/editor",
        element: <TextEditor />,
      },
      {
        path: "/dashboard/blogs",
        element: <BlogList />,
        loader: () => fetch("http://localhost/durbar-20-client/blogLoad.php"),
      },
      {
        path: "/dashboard/aboutEditor",
        element: <AboutEditor />,
      },
    ],
  },
]);

export default Router;
