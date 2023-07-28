import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./reducers/cartSlice";
import ordersSlice from "./reducers/ordersSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    orders: ordersSlice,
  },
});

export default store;
