import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
