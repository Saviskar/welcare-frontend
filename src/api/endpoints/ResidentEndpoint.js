import { welcareAPI } from "../welcareAPI";

const residentApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    getGuests: build.query({
      query: () => "/resident",
      transformResponse: (response) => {
        return response[0];
      },
    }),
    deleteGuest: build.mutation({
      query: (id) => ({
        url: `/resident/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetGuestsQuery, useDeleteGuestMutation } = residentApi;
