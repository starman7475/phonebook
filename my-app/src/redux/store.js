import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsApi } from "../services/contacts";

import itemsSlicers from "../allSlicers/itemsSlicers";
import filterSlicers from "../allSlicers/filterSlicers";

const contacts = combineReducers({
  items: itemsSlicers.reducer,
  filter: filterSlicers.reducer,
});

export const store = configureStore({
  reducer: {
    contacts: contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
