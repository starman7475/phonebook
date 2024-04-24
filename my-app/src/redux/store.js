import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsApi } from "../services/contacts-operations";
import authSlice from "./auth/authSlice";

import itemsSlicers from "../allSlicers/itemsSlicers";
import filterSlicers from "../allSlicers/filterSlicers";

const contacts = combineReducers({
  items: itemsSlicers.reducer,
  filter: filterSlicers.reducer,
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
