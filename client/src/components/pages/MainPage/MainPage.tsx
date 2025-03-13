import { FC } from 'react'
import { OrderList } from '../../common/Order/OrderList.tsx'
import { MainLayout } from '../../../layouts/MainLayout.tsx'
import { Search } from '../../common/Search/Search.tsx'
import { Select } from '../../common/Search/Select.tsx'


export const MainPage: FC = () => {

  return (
    <MainLayout>
      <div className='mb-6'>
      <Search />
      <Select />
      </div>
      <OrderList />
    </MainLayout>
  )
}
