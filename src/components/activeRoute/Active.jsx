import { NavLink } from "react-router-dom";
import "./Active.css";

const Active = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {children}
    </NavLink>
  );
};

export default Active;
