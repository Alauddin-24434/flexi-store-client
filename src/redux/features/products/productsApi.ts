import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create food item
    createProdut:builder.mutation({
      query: (foodInfo) => ({
        url: "/foodItem-create",
        method: "POST",
        body: foodInfo,
      }),
      invalidatesTags: ["food"], // নতুন item যোগ করার পর Food ট্যাগ মেয়াদোত্তীর্ণ হবে
    }),

    findAllProduct:builder.query({
      query: ({
        page = 1,
        limit = 10,
        filter = "",
        category = "",
        sorting = "",
      }) => {
        let url = `/products?page=${page}&limit=${limit}&filter=${filter}`;

        // Add category and sorting to the query string if they exist
        if (category) url += `&category=${category}`;
        if (sorting) url += `&sorting=${sorting}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["food"], // This will cache all food items
    }),

    // Find food item by ID
    findProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      //   providesTags: ["food"], // নির্দিষ্ট Food item ক্যাশে সংরক্ষণ করবে
    }),

    // Update food item
    updateFoodItem: builder.mutation({
      query: ({ id, ...foodInfo }) => ({
        url: `/${id}`,
        method: "PUT",
        body: foodInfo,
      }),
      invalidatesTags: ["food"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

    // Delete food item
    deleteFoodItem: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["food"], // মুছে ফেলা item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),
  }),
});

export const {
  useFindAllProductQuery,
  useFindProductByIdQuery,
  useUpdateFoodItemMutation,
  useDeleteFoodItemMutation,
} = productsApi;
