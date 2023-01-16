import { createSlice } from "@reduxjs/toolkit";

export const SearchStoreSlice = createSlice({
  name: "searhStoreTerm",
  initialState: [],
  reducers: {
    createdSearchTerm: (state, action) => {
      state.push(action.payload);
    },
    updatedSearchTerm: (state, action) => {
      const { id } = action.payload;
      const searchFound = state.find((searchTerm) => searchTerm.id === id);
      if (searchFound) {
        searchFound.id = id;
      }
    },
    deleteSearchTerm: (state, action) => {
      const searchFound = state.find(
        (searchTerm) => searchTerm.id === action.payload
      );
      if (searchFound) {
        state.slice(state.indexOf(searchFound), 1);
      }
    },
  },
});

export const { createdSearchTerm, updatedSearchTerm, deleteSearchTerm } =
  SearchStoreSlice.actions;

export default SearchStoreSlice.reducer;
