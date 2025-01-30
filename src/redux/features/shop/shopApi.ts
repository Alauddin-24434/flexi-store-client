import { baseApi } from "../../api/baseApi";

const shopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create Shop
    createShop: builder.mutation({
      query: (shopInfo) => ({
        url: "/create-shop",
        method: "POST",
        body: shopInfo,
      }),
      invalidatesTags: ["Shop"], // Invalidate Shop cache to ensure fresh data
    }),

    // Get all shops with optional filters
    findAllShops: builder.query({
      query: () => {
       
        return {
          url: `/shops`,
          method: "GET",
        };
      },
      providesTags: ["Shop"], // Cache all shop data
    }),
    // find sgops by vendorid
    findShopsVendorId: builder.query({
      query: (vendorId) => {
       
        return {
          url: `/shops/${vendorId}`,
          method: "GET",
        };
      },
      providesTags: ["Shop"], // Cache all shop data
    }),
    // find sgops by vendorid
    findOrderHistoryVendorId: builder.query({
      query: (vendorId) => {
       
        return {
          url: `/order/${vendorId}`,
          method: "GET",
        };
      },
      providesTags: ["Shop"], // Cache all shop data
    }),
    flowShop: builder.mutation({
        query: ({ userId, shopId, action }) => ({
          url: `/shop/flow-action/${userId}`, // The flow action API endpoint
          method: "POST",
          body: { shopId, action }, // Pass the shopId and action (follow/unfollow)
        }),
        // Optionally, invalidate or update any relevant cache
        invalidatesTags: ["Shop"],
      }),

    // Find Shop by ID
    findShopById: builder.query({
      query: (id) => ({
        url: `/shop/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Shop", id }], // Cache the specific shop data
    }),

    // Update Shop
    updateShop: builder.mutation({
      query: ({ id, ...shopInfo }) => ({
        url: `/shops/${id}`,
        method: "PUT",
        body: shopInfo,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Shop", id }, "Shop"], // Invalidate the specific shop and all shops cache
    }),

    // Delete Shop
    deleteShop: builder.mutation({
      query: (id) => ({
        url: `/shops/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Shop", id }, "Shop"], // Invalidate the deleted shop and all shops cache
    }),
  }),
});

export const {
  useCreateShopMutation,
  useFindShopsVendorIdQuery,
  useFindAllShopsQuery,
  useFindShopByIdQuery,
  useUpdateShopMutation,
  useDeleteShopMutation,
  useFlowShopMutation
} = shopApi;
