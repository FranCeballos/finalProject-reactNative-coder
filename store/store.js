import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartSlice from "./reducers/cartSlice";
import ordersSlice from "./reducers/ordersSlice";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    orders: ordersSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
