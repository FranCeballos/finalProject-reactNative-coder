import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProductById: builder.query({
      query: (id) => `products.json?orderBy="_id"&equalTo="${id}"`,
    }),
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getOrders: builder.query({
      query: (user) => `orders.json?orderBy="user"&equalTo="${user}"`,
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetOrdersQuery,
  usePostOrderMutation,
} = shopApi;
