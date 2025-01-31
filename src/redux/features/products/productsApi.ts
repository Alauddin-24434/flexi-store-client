import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create food item
    createProdut: builder.mutation({
      query: (productInfo) => ({
        url: "/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"], // নতুন item যোগ করার পর Food ট্যাগ মেয়াদোত্তীর্ণ হবে
    }),

    findAllProduct: builder.query({
      query: ({
        page = 1,
        limit = 10,
        filter = "",
        category = "",
        sorting = "",
        search = "",
      }) => {
        let url = `/products?page=${page}&limit=${limit}&filter=${filter}`;
        // Add category, sorting, and search to the query string if they exist
        if (category) url += `&category=${category}`;
        if (sorting) url += `&sorting=${sorting}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["product"], // This will cache all food items
    }),

    // Find food item by ID
    findFlasSaleProducts: builder.query({
      query: () => ({
        url: `products/flashSale`,
        method: "GET",
      }),
        providesTags: ["product"], 
    }),
    // Find food item by ID
    findProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
        providesTags: ["product"], 
    }),

    // Update food item
    updateFoodItem: builder.mutation({
      query: ({ id, ...foodInfo }) => ({
        url: `/${id}`,
        method: "PUT",
        body: foodInfo,
      }),
      invalidatesTags: ["product"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),
    addProductReview: builder.mutation({
      query: ({ productId, body }) => ({
        url: `product-review/${productId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["product"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

    // Delete food item
    deleteFoodItem: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"], // মুছে ফেলা item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),
  }),
});

export const {
  useFindAllProductQuery,
  useCreateProdutMutation,
  useFindProductByIdQuery,
  useUpdateFoodItemMutation,
  useDeleteFoodItemMutation,
  useFindFlasSaleProductsQuery,
  useAddProductReviewMutation
} = productsApi;
