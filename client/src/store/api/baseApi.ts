import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../createStore"

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState
            const token = state.auth.token

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: builder =>  ({
        getMe: builder.query({
            query: () => '/f'
        })
    })
})
