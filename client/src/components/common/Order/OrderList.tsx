import React, { FC } from 'react'
import { OrderItem } from './OrderItem'
import { IGetOrder } from '../../../types/types'


interface IOrderListProps {
    orders: IGetOrder[]
}
export const OrderList: FC<IOrderListProps> = ({ orders }) => {
    console.log(orders)
    return (
        <div>
            {orders && orders.length > 0 ? (orders?.map((order: IGetOrder) => (
                <OrderItem 
                key={order?._id}
                id={order?._id} 
                category={order?.category?.name || 'Без категории'} 
                title={order?.title} 
                budget={order?.budget || 'Договорная' }
                status={order?.status}
                createdAt={order?.createdAt}
                deadline={order?.deadline || 'Без срока выполнения'}
                user={order?.client}
                parentCategory={order?.category?.parent?.name || ''}/>
            )))
                :
                (<div>Нет заказов</div>)
            }
        </div>
    )
}
