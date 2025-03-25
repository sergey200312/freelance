import { FC, useState } from 'react'
import { OrderList } from '../../common/Order/OrderList.tsx'
import { MainLayout } from '../../../layouts/MainLayout.tsx'
import { Filters } from '../../common/Filter/Filters.tsx'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/createStore.ts'
import { useGetOrdersQuery } from '../../../store/api/orderApi.ts'
import { Loader } from '../../common/Loader/Loader.tsx'


export const MainPage: FC = () => {

  const filter = useSelector((state: RootState) => state.filter)

  const { data, isLoading } = useGetOrdersQuery(filter)


  return (
    <MainLayout >
      <div className='mb-6'>
        <Filters />
      </div>
      { isLoading ? <Loader /> : <OrderList orders = {data} /> }
    </MainLayout>
  )
}
