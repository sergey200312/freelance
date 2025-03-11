import { FC } from 'react'


export const OrderInformation: FC = () => {
    return (
        <div className='mt-10 p-2 mx-auto grid grid-cols-2 w-4/5 border border-black/20 border-solid rounded-md'>
            <div className='col-span-1'>
                <div className='p-2 flex justify-between'>
                    <h4 className='font-semibold'>Заказ</h4>
                    <p>4353</p>
                </div>
                <div className='p-2 flex justify-between'>
                    <h4 className='font-semibold'>Раздел</h4>
                    <p>Программирование</p>
                </div>
                <div className='p-2 flex justify-between'>
                    <h4 className='font-semibold'>Специализация</h4>
                    <p>Веб-разработка</p>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='p-2 flex justify-between'>
                    <h4>Дата размещения</h4>
                    <p>вапывв</p>
                </div>
                <div className='p-2 flex justify-between'>
                    <h4>Срок сдачи</h4>
                    <p>5644</p>
                </div>
                <div className='p-2 flex justify-between'>
                    <h4>Цена</h4>
                    <p>Договорная</p>
                </div>

            </div>
        </div>
    )
}
