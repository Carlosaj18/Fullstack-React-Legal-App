import { configureStore } from '@reduxjs/toolkit';
import SearchStoreReducer from "../features/searchBar/searchBarSlice";

export const store = configureStore({
  reducer: {
    searhStoreTerm: SearchStoreReducer,
  },
});
