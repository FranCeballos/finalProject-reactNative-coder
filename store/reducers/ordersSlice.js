import { createSlice } from "@reduxjs/toolkit";

const initialStateOrders = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialStateOrders,
  reducers: {
    added(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { added } = ordersSlice.actions;

export default ordersSlice.reducer;
