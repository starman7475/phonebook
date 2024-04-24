import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from "../services/contacts-operations";

const ContactList = () => {
  const filter = useSelector((state) => state.contacts.filter);

  const { data, isLoading } = useGetAllContactsQuery();

  const [deleteContact, { isLoading: isUpdating }] = useDeleteContactMutation();

  return (
    <div>
      <ul>
        {isLoading && (
          <Circles
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="circles-loading"
            visible={true}
          />
        )}
        {!isLoading &&
          data
            .filter((el) =>
              el.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item) => {
              return (
                <li key={item.id}>
                  <p>
                    {item.name}: {item.phone}
                    <button
                      type="button"
                      onClick={() => {
                        deleteContact(item.id);
                      }}
                    >
                      {isUpdating ? "Deleting..." : "Delete"}
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
