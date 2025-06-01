import { welcareAPI } from "../welcareAPI";

const residentApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query({
      query: (id) => `/residentContact/${id}`,
      transformResponse: (response) => {
        return response[0];
      },
    }),
  }),
});

export const { useGetContactsQuery } = residentApi;
