import { FC } from 'react'
import { Header } from '../../common/Header/Header'
import { ServiceOverview } from '../../common/ServiceOverview/ServiceOverview.tsx'
import { OrderList } from '../../common/Order/OrderList.tsx'

export const MainPage: FC = () => {

  return (
    <div className='flex flex-col'>
        <Header />
        <div className='grid grid-cols-4 gap-4 p-6'>
          <div className='col-span-1'>
            <ServiceOverview />
          </div>
          <div className='col-span-2'>
            <OrderList />
          </div>
          <div className='col-span-1'>

          </div>
        </div>
    </div>
  )
}
