import { welcareAPI } from "../welcareAPI";

const residentApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    getGuests: build.query({
      query: () => "/resident",
      transformResponse: (response) => {
        return response[0];
      },
    }),
  }),
});

export const { useGetGuestsQuery } = residentApi;
