import React, { FC } from 'react'
import { useGetOrdersQuery } from '../../../store/api/orderApi'
import { OrderItem } from './OrderItem'

export const OrderList: FC = () => {
    const { data } = useGetOrdersQuery()
    console.log(data)

    return (
        <div className='bg-white rounded-md shadow-custom p-4 min-w-[300px]'>
            {data && data.length > 0 ? (data?.map((order: any) => (
                <OrderItem 
                key={order.id} 
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
