import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/hello"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
