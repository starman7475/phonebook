import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    e.target.reset();
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите имя пользователя
        <input type="text" name="name" onChange={changeName} />
      </label>
      <label>
        Введите почту
        <input type="email" name="email" onChange={changeEmail} />
      </label>
      <label>
        Введите пароль
        <input type="password" name="password" onChange={changePassword} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegisterForm;
