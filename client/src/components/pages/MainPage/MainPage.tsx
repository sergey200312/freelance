import { FC } from 'react'
import { OrderList } from '../../common/Order/OrderList.tsx'
import { MainLayout } from '../../../layouts/MainLayout.tsx'
import { Filters } from '../../common/Filter/Filters.tsx'
import { Search } from '../../common/Filter/Search.tsx'


export const MainPage: FC = () => {

  return (
    <MainLayout>
      <div className='mb-6'>
        <Filters />
      </div>
      <OrderList />
    </MainLayout>
  )
}
