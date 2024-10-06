import { Link, Outlet, useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/admin/login");
  };

  return (
    <div>
      <div className="w-full bg-green-700">
        <header className="container mx-auto flex justify-between items-center py-5">
          <div>
            <a href="#">
              <h1 className="text-[30px] text-white">Dashboard</h1>
            </a>
          </div>
          <button
            className="bg-red-600 py-3 px-5 rounded-sm text-white"
            onClick={handleLogout}
          >
            log Out
          </button>
        </header>
      </div>
      <div className="flex ">
        <div className="basis-1/4 h-screen  bg-green-700 ">
          <div className="w-16 h-16 mx-auto">
            <img src={profile} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className="menu">
            <ul className="w-1/2 mx-auto mt-5">
              <li className="mb-4">
                <Link className="text-[20px] text-white">Dashboard</Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/request"
                  className="text-[20px] text-white"
                >
                  Admin Request
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-[20px] text-white">Admin</Link>
              </li>
              <li className="mb-4">
                <Link to="/dashboard/blogs" className="text-[20px] text-white">
                  All Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/aboutEditor"
                  className="text-[20px] text-white"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/dashboard/editor" className="text-[20px] text-white">
                  Editor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
