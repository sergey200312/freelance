import { FC } from 'react'
import { Button } from '../../ui/button'

export const Header: FC = () => {
    return (
        <header className='relative py-4 min-h-[50px] px-44'>
            <div className='flex items-center justify-between'>
                <h4 className='cursor-pointer'>Логотип</h4>
                <aside>
                    <ul className='flex justify-center items-center gap-8'>
                        <li className='cursor-pointer mx-auto hover:border-b border-black transition-all duration-75'>Услуги</li>
                        <li className='cursor-pointer mx-auto hover:border-b border-black transition-all duration-75'>Заказы</li>
                        <li className='cursor-pointer mx-auto hover:border-b border-black transition-all duration-75'>Фрилансеры</li>
                    </ul>
                </aside>
                <div><Button variant='outline' className='bg-transparent border shadow-custom shadow-black hover:shadow-none border-black hover:text-white hover:bg-black duration-400'>Авторизация</Button></div>
            </div>
            <div className='absolute left-0 bottom-0  w-full h-[1px] bg-black'></div>
        </header>
    )
}
