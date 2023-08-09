import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartSlice from "./reducers/cartSlice";
import ordersSlice from "./reducers/ordersSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    orders: ordersSlice,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export default store;
