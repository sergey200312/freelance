import { IOrderData } from '../../types/types';
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
        }),
        createOrder: builder.mutation({
            query: (orderData: IOrderData) => ({
                url: '/order',
                method: 'POST',
                body: orderData
            })
        }),
        getMyOrders: builder.query({
            query: () => '/order/my'
        }),
        getExecutingOrders: builder.query({
            query: () => '/order/executing'
        })
    }),
    overrideExisting: false
});

export const { 
    useGetOrdersQuery,
    useGetDetailsOrderQuery,
    useCreateOrderMutation,
    useGetMyOrdersQuery,
    useGetExecutingOrdersQuery
 } = orderApi;
