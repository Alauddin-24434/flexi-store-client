import { baseApi } from "@/redux/api/baseApi";


const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        createCategory : builder.mutation({
            query: (categoryInfo)=>({
                url:'/',
                method:'POST',
                body:categoryInfo,
            }),
           invalidatesTags:["Category"]
        }),
        getAllcategory: builder.query({
            query:()=>({
                url:'',
                method:'GET',
                
            }),
            providesTags:["Category"]
        }),

        
    })
})


export const {useCreateCategoryMutation,useGetAllcategoryQuery}= categoryApi;