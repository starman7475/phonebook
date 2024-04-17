import { useDispatch } from "react-redux";
import { changeFilter } from "../allSlicers/filterSlicers";
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};
export default Filter;
