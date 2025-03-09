import React, { FC } from 'react'
import { orderStatus } from '../../../constants/orderStatus'
import { dateFormatter } from '../../../utils/dateFormatter';

type OrderStatus = 'open' | 'in_progress' | 'completed';



interface IOrderItemProps {
    title: string
    category: string
    budget: number | string
    status: OrderStatus
    createdAt: Date
    deadline: Date | string
}

export const OrderItem: FC<IOrderItemProps> = ({ title, category, budget, status, createdAt, deadline }) => {
    return (
        <div className='flex flex-col p-4 gap-3'>
            <div className='flex justify-between'>
                <p className='font-bold text-xl'>{title}</p>
                <div className='flex gap-1 items-center'>
                    <img src="/money-svgrepo-com.svg" alt="Иконка" width={40} height={40} /><p className='font-semibold'>{budget}₽</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <p>{category}</p>
                <div className={` ${orderStatus[status].bgcolor} px-2  rounded-md flex gap-2 items-center`} >
                    <img src={orderStatus[status].img} alt={orderStatus[status].name} height={15} width={15} />
                    <p className='text-white'>{orderStatus[status].name}</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    
                </div>
                <div className='flex justify-center gap-2 items-center'>
                    <p>{dateFormatter(new Date(createdAt))}</p>
                    <span>→</span>
                    <p>{typeof deadline === 'string' ? deadline : dateFormatter(new Date(deadline))}</p>
                </div>
            </div>
        </div>
    )
}
