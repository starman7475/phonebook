import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../allSlicers/itemsSlicers";
import { useMemo } from "react";

const ContactList = () => {
  const items = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const contactsAfterFilter = useMemo(
    () =>
      items.filter((el) =>
        el.name.toLowerCase().includes(filter.toLocaleLowerCase())
      ),
    [filter, items]
  );
  return (
    <div>
      <ul>
        {contactsAfterFilter.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.name}: {item.number}
                <button
                  type="button"
                  onClick={() => dispatch(deleteItem(item.id))}
                >
                  delete
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
