import React, { FC } from 'react'
import { useGetOrdersQuery } from '../../../store/api/orderApi'
import { OrderItem } from './OrderItem'

export const OrderList: FC = () => {
    const { data } = useGetOrdersQuery()

    return (
        <div className='bg-white rounded-md'>
            {data && data.length > 0 ? (data?.map((order: any) => (
                <OrderItem 
                key={order.id} 
                category={order.category?.name || 'Без категории'} 
                title={order.title} 
                budget={order?.budget || 'Договорная' }
                status={order.status}
                createdAt={order.createdAt}
                deadline={order.deadline || 'Без срока выполнения'}/>
            )))
                :
                (<div>Нет заказов</div>)
            }
        </div>
    )
}
