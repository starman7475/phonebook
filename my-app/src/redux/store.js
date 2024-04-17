import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsSlicers from "../allSlicers/itemsSlicers";
import filterSlicers from "../allSlicers/filterSlicers";

const contacts = combineReducers({
  items: itemsSlicers.reducer,
  filter: filterSlicers.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: ["contacts.filter"],
};

const persistedContacts = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
  },
});

export const persistor = persistStore(store);
