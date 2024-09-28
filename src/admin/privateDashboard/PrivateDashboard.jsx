import { Navigate } from "react-router-dom";

const PrivateDashboard = ({ children }) => {
  const user = sessionStorage.getItem("user");
  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/admin/login"></Navigate>;
  }
};

export default PrivateDashboard;
