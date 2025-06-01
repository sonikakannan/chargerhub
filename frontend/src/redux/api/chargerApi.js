import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/charger"
    : "https://chargerhub-backend.onrender.com/charger";

export const chargerApi = createApi({
  reducerPath: "chargerApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
