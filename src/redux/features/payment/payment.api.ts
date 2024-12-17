import { baseApi } from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findAllPayments: builder.query({
      query: ({ page = 1, limit = 10, search = "", status = "" }) => ({
        url: `/payment`,
        params: {
          page,
          limit,
          search,
          status,
        },
      }),
      providesTags: ["payment"], 
    }),
  }),
});

export const { useFindAllPaymentsQuery } = paymentApi;
export default paymentApi;
