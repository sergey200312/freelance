import React, { FC } from 'react'
import { Button } from '../../ui/button'

export const ServiceOverview: FC = () => {
    return (
        <div className='p-4 bg-white rounded-md flex flex-col gap-2 shadow-custom'>
            <Button className='mx-auto w-4/5'>Разместить заказ</Button>
            
        </div>
    )
}
