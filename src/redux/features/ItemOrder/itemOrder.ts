import { baseApi } from "../../api/baseApi";

const itemOrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // initiate order
    orderInitiate: builder.mutation({
      query: (orderInfo) => ({
        url: '/order-initiate',
        method: 'POST',
        body: orderInfo,
      }),
      invalidatesTags: ['order'],  // নতুন item যোগ করার পর Food ট্যাগ মেয়াদোত্তীর্ণ হবে
    }),


  }),
});

export const {
useOrderInitiateMutation

} = itemOrderApi;
