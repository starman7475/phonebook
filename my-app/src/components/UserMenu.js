import { useDispatch, useSelector } from "react-redux";
import getSomething from "../redux/auth/auth-selectors";
import { logOut } from "../redux/auth/auth-operations";
import "../App.css";

const UserMenu = () => {
  const userName = useSelector(getSomething.getUserName);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="userMenu">
      <p>Welcome, {userName}!</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
