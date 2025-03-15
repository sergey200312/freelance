import { FC } from 'react'
import { Button } from '../../ui/button'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/features/authSlice'

export const Header: FC = () => {
    const dispatch = useDispatch()

    return (
        <header className='relative py-4 min-h-[50px] px-44'>
            <div className='flex items-center justify-between'>
                <h4 className='cursor-pointer'>Логотип</h4>
                <aside>
                    <ul className='flex justify-center items-center gap-8'>
                        <li className='text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75'>Услуги</li>
                        <li className='text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75'>Заказы</li>
                        <li className='text-white cursor-pointer mx-auto hover:border-b border-white transition-all duration-75'>Фрилансеры</li>
                    </ul>
                </aside>
                <div><Button variant='default' className='shadow-default'
                onClick={() => dispatch(logout())}>Выйти</Button></div>
            </div>
            <div className='absolute left-0 bottom-0  w-full h-[1px] bg-black'></div>
        </header>
    )
}
