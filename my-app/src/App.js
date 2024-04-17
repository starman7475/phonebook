import ContactFrom from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

// import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div>
      <h1>Pnonebook</h1>
      <ContactFrom></ContactFrom>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
}

export default App;
