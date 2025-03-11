import React, { FC } from 'react'
import { orderStatus } from '../../../constants/orderStatus'
import { dateFormatter } from '../../../utils/dateFormatter';
import { Link } from 'react-router-dom';

type OrderStatus = 'open' | 'in_progress' | 'completed';



interface IOrderItemProps {
    id: string
    title: string
    category: string
    budget: number | string
    status: OrderStatus
    createdAt: Date
    deadline: Date | string
    avatar_url: string
    username: string
    parentCategory: string
}

export const OrderItem: FC<IOrderItemProps> = ({ id, title, category, budget, status, createdAt, deadline, avatar_url, username, parentCategory }) => {
    return (
        <Link to = {`/order-details/${id}`}>
            <div className='flex flex-col p-4 gap-4 border-b border-black border-solid'>
                <div className='flex justify-between'>
                    <p className='font-bold text-xl'>{title}</p>
                    <div className='flex gap-1 items-center'>
                        <img src="/money-svgrepo-com.svg" alt="Иконка" width={40} height={40} /><p className='font-semibold'>{budget}₽</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-slate-500'>{parentCategory} / {category}</p>
                    <div className={` ${orderStatus[status].bgcolor} px-2  rounded-md flex gap-2 items-center`} >
                        <img src={orderStatus[status].img} alt={orderStatus[status].name} height={15} width={15} />
                        <p className='text-white'>{orderStatus[status].name}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={avatar_url} alt='Аватарка' width={30} height={30} className='rounded-md object-cover' />
                        <p className='text-blue-500'>{username}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{dateFormatter(new Date(createdAt))}</p>
                        <span>→</span>
                        <p>{dateFormatter(new Date(deadline), 'Без срока выполнения')}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
