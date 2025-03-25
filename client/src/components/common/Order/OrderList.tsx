import React, { FC } from 'react'
import { useGetOrdersQuery } from '../../../store/api/orderApi'
import { OrderItem } from './OrderItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/createStore'
import { IGetOrder } from '../../../types/types'
import { Loader } from '../Loader/Loader'


interface IOrderListProps {
    orders: IGetOrder[]
}
export const OrderList: FC<IOrderListProps> = ({ orders }) => {
    return (
        <div className='bg-gray-200 border border-gray-200 rounded-xl p-4 shadow-default min-w-[300px]'>
            {orders && orders.length > 0 ? (orders?.map((order: any) => (
                <OrderItem 
                key={order._id}
                id={order._id} 
                category={order.category?.name || 'Без категории'} 
                title={order.title} 
                budget={order?.budget || 'Договорная' }
                status={order.status}
                createdAt={order.createdAt}
                deadline={order.deadline || 'Без срока выполнения'}
                avatar_url={order.client.avatar_url}
                username={order.client.username}
                parentCategory={order.category?.parent?.name || ''}/>
            )))
                :
                (<div>Нет заказов</div>)
            }
        </div>
    )
}
