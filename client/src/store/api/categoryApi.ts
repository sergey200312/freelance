import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => '/category'
        }),
    }),
    overrideExisting: false
})

export const { useGetAllCategoriesQuery } = categoryApi