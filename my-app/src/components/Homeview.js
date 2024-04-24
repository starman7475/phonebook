import "../App.css";
import { Link, Outlet } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import getSomething from "../redux/auth/auth-selectors";

const Homeview = () => {
  const isLoggedIn = useSelector(getSomething.getIsLoggedIn);
  return (
    <>
      <header className="header">
        <Link to="/">Home </Link>
        <Link to="/register">Registration</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">Contacts</Link>
        {isLoggedIn && <UserMenu />}
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Homeview;
