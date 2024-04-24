import Contacts from "./components/Contacts";
import { Routes, Route } from "react-router-dom";
import Homeview from "./components/Homeview";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Homeview />}>
          <Route index path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
