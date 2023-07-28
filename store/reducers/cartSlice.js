import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    added(state, action) {
      state.items.push(action.payload);
    },
    deleted(state, action) {
      return {
        items: state.items.filter((item) => {
          return item._id !== action.payload;
        }),
      };
    },
    deletedAll(state, action) {
      return { items: [] };
    },
  },
});

export const { added, deleted, deletedAll } = cartSlice.actions;

export default cartSlice.reducer;
