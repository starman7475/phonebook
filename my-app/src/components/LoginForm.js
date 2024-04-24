import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите имя пользователя
        <input type="email" name="email" />
      </label>
      <label>
        Введите пароль
        <input type="password" name="password" />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};
export default LoginForm;
