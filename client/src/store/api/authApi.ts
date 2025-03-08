import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginUser, IRegisterUser } from "../../types/types";



export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData: IRegisterUser) => ({
                url: 'user',
                method: 'POST',
                body: userData
            })
        }),
        login: builder.mutation({
            query: (userData: ILoginUser) => ({
                url: 'auth/login',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation
} = authApi