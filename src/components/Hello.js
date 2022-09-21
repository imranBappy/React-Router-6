import { Link, Outlet } from "react-router-dom";
export default function Hello() {
  return (
    <div>
      <Outlet />

      <h1>Hello</h1>
      <p>This is the home page</p>
      <Link to="world/">World</Link>
    </div>
  );
}
