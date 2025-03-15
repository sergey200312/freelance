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
        })
    }),
    overrideExisting: false
});

export const { 
    useGetOrdersQuery,
    useGetDetailsOrderQuery,
    useCreateOrderMutation
 } = orderApi;
