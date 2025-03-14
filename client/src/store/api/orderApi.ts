import { baseApi } from './baseApi';

export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: (params) => ({
                url: '/order',
                method: 'GET',
                params
            }),
        }),
        getDetailsOrder: builder.query({
            query: (id: string) => ({
                url: `/order/${id}`,
                method: 'GET',
            })
        })
    }),
    overrideExisting: false
});

export const { 
    useGetOrdersQuery,
    useGetDetailsOrderQuery
 } = orderApi;
