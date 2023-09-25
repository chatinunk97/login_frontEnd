import { Outlet, Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <div className="app">
      <div className="topbar">
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/Login"}>Login</Link>
        </li>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
