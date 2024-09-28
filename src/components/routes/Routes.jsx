import { createBrowserRouter } from "react-router-dom";
import Admin_request from "../../admin/admin-data/Admin_request";
import Login from "../../admin/authentication/login/login";
import SignUp from "../../admin/authentication/signUp/SignUp";
import Dashboard from "../../admin/dashbord/Dashboard";
import PrivateDashboard from "../../admin/privateDashboard/PrivateDashboard";
import TextEditor from "../../admin/textEditor/TextEditor";
import DonarList from "../../pages/DonarList/DonarList";
import Home from "../../pages/home/Home";
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
    ],
  },
]);

export default Router;
