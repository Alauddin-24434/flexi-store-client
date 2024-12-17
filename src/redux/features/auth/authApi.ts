import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),

      invalidatesTags: ["user"],
    }),

    // login

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    // other
    findAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    findSingleUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation,useFindAllUsersQuery,useFindSingleUserQuery } = authApi;
