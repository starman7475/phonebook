import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from "../services/contacts";
import { Circles } from "react-loader-spinner";

const ContactFrom = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetAllContactsQuery();

  const onSubmit = (e) => {
    e.preventDefault();

    if (data.some((item) => item.name === e.target.elements.name.value)) {
      alert(`${e.target.elements.name.value} is already in your contacts`);
      return;
    }

    const newContact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    };

    addContact(newContact);

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit} name="form">
      <label>
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">{isLoading ? "Deleting..." : "Add Contact"}</button>
    </form>
  );
};

export default ContactFrom;
