import { FC } from 'react'
import { OrderList } from '../../common/Order/OrderList.tsx'
import { MainLayout } from '../../../layouts/MainLayout.tsx'
import { Search } from '../../common/Search/Search.tsx'


export const MainPage: FC = () => {

  return (
    <MainLayout>
      <Search />
      <OrderList />
    </MainLayout>
  )
}
