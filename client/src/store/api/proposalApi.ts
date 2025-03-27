import { baseApi } from "./baseApi";


export const proposalApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProposals: builder.query({
            query: (order: string) => ({
                url: `proposal/${order}`,
                method: 'GET'
            }),
        }),
    })
})

export const { useGetAllProposalsQuery } = proposalApi