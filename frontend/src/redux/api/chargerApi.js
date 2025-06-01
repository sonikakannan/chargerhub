import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chargerApi = createApi({
  reducerPath: "chargerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/charger" }),
  endpoints: (builder) => ({
    createCharger: builder.mutation({
      query: (charger) => ({
        url: "/create",
        method: "POST",
        body: charger,
      }),
    }),
    readCharger: builder.query({
      query: (filters = {}) => {
        const params = new URLSearchParams(filters).toString();
        return `/read${params ? `?${params}` : ""}`;
      },
    }),
    updateCharger: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCharger: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateChargerMutation,
  useReadChargerQuery,
  useUpdateChargerMutation,
  useDeleteChargerMutation,
} = chargerApi;
