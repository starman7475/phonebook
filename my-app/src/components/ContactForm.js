import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addItem } from "../allSlicers/itemsSlicers";

const ContactFrom = () => {
  const items = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (items.some((item) => item.name === e.target.elements.name.value)) {
      alert(`${e.target.elements.name.value} is already in your contacts`);
      return;
    }

    const newContact = {
      name: e.target.elements.name.value,
      id: nanoid(),
      number: e.target.elements.number.value,
    };

    // setContacts((p) => [...p, newContact]);
    dispatch(addItem(newContact));
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
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactFrom;
