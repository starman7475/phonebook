import ContactFrom from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

const Contacts = () => {
  return (
    <div>
      <h1>Pnonebook</h1>
      <ContactFrom></ContactFrom>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};
export default Contacts;
