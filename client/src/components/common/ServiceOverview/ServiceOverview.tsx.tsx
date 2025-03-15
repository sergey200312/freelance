import React, { FC } from 'react'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../router/constats'

export const ServiceOverview: FC = () => {
    const navigate = useNavigate()
    
    return (
        <div className='p-4 flex bg-gray-200 rounded-md flex-col gap-2 shadow-default'>
            <Button className='mx-auto w-4/5' onClick={() => navigate(`${ROUTES.CREATEORDER}`)}>Разместить заказ</Button>
            
        </div>
    )
}
