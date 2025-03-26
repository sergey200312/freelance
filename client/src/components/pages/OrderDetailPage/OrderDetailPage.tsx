import React, { FC } from 'react'
import { MainLayout } from '../../../layouts/MainLayout'
import { OrderInformation } from '../../common/Order/OrderInformation'
import { useParams } from 'react-router-dom'
import { useGetDetailsOrderQuery } from '../../../store/api/orderApi'
import { Loader } from '../../common/Loader/Loader'

export const OrderDetailPage: FC = () => {

  const { id } = useParams()

  const { data, isLoading } = useGetDetailsOrderQuery(String(id))

  console.log(data)


  return (
    <MainLayout>
      {isLoading ? <Loader /> : <OrderInformation
        _id={data._id}
        category={data.category}
        client={data.client}
        createdAt={data.createdAt}
        deadline={data.deadline}
        price={data.price}
      />
      }
    </MainLayout>
  )
}
