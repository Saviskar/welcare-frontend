import { welcareAPI } from "../welcareAPI";

const authApi = welcareAPI.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({ username, password }) => ({
        url: "user/login",
        method: "POST",
        body: {
          username: username,
          password: password,
        },
      }),
    }),
    authenticate: build.query({
      query: () => "user/authenticate",
    }),
  }),
});

export const { useLoginUserMutation, useAuthenticateQuery } = authApi;
