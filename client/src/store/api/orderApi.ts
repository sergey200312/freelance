import { baseApi } from './baseApi';

export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<any, void>({
            query: () => '/order'
        }),
    }),
    overrideExisting: false
});

export const { useGetOrdersQuery } = orderApi;
