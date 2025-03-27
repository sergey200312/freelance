import React, { FC } from 'react'
import { useGetMyOrdersQuery } from '../../../store/api/orderApi'
import { Loader } from '../../common/Loader/Loader'
import { MainLayout } from '../../../layouts/MainLayout'
import { OrderList } from '../../common/Order/OrderList'

export const MyPosterOrders: FC = () => {
    const { data, isLoading } = useGetMyOrdersQuery()
    console.log(data)

    return (
        <MainLayout >
            <div className='mb-6'>
                {isLoading ? <Loader /> : data &&  <OrderList orders={data} />}
            </div>
        </MainLayout>
    )
}
