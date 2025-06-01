import { welcareAPI } from "../welcareAPI";

const residentApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    getGuardian: build.query({
      query: (id) => `/guardian/${id}`,
    }),
  }),
});

export const { useGetGuardianQuery } = residentApi;
