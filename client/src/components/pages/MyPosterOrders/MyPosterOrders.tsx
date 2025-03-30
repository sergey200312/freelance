import React, { FC, useState } from 'react'
import { useGetExecutingOrdersQuery, useGetMyOrdersQuery } from '../../../store/api/orderApi'
import { Loader } from '../../common/Loader/Loader'
import { MainLayout } from '../../../layouts/MainLayout'
import { OrderList } from '../../common/Order/OrderList'
import { Button } from '../../ui/button'
import { OrderType } from '../../../types/types'

export const MyPosterOrders: FC = () => {
    const [activeTab, setActiveTab] = useState<OrderType>('order')

    const { data: dataOrder, isLoading: isOrderLoading } = useGetMyOrdersQuery(undefined, {
        skip: activeTab !== 'order'
    })
    const { data: dataExecutingOrder, isLoading: isExecutingOrderLoading } = useGetExecutingOrdersQuery(undefined, {
        skip: activeTab !== 'execution'
    })

    const isLoading = activeTab === 'order' ? isOrderLoading : isExecutingOrderLoading
    const orders = activeTab === 'order' ? dataOrder : dataExecutingOrder

    return (
        <MainLayout>
            <div className='bg-white border border-gray-200 rounded-xl p-4 shadow-default min-w-[300px] mb-6'>
                <div className='flex items-center justify-between gap-2'>
                    <Button variant='link'  onClick={() => setActiveTab('order')} >
                        Размещенные заказы
                    </Button>
                    <Button variant='link' onClick={() => setActiveTab('execution')}>
                        Выполняемые заказы
                    </Button>
                </div>

                <div>
                    {isLoading ? <Loader /> : <OrderList orders={orders} />}
                </div>
            </div>
        </MainLayout>
    )
}
