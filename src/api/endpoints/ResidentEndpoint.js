import { welcareAPI } from "../welcareAPI";

const residentApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    getGuests: build.query({
      query: () => "/resident",
      transformResponse: (response) => {
        // this only return the first item in the array might cause issue when there are multiple guests/residents
        return response[0];
      },
    }),
    getGuest: build.query({
      query: (id) => `/resident/${id}`,
    }),
    createGuest: build.mutation({
      query: (guestData) => ({
        url: `/resident/create`,
        method: "POST",
        body: guestData,
      }),
    }),
    deleteGuest: build.mutation({
      query: (id) => ({
        url: `/resident/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetGuestsQuery,
  useGetGuestQuery,
  useCreateGuestMutation,
  useDeleteGuestMutation,
} = residentApi;
