import React, { FC } from 'react'
import { MainLayout } from '../../../layouts/MainLayout'
import { OrderInformation } from '../../common/Order/OrderInformation'
import { useParams } from 'react-router-dom'
import { useGetDetailsOrderQuery } from '../../../store/api/orderApi'
import { Loader } from '../../common/Loader/Loader'

export const OrderDetailPage: FC = () => {

    const { id } = useParams()
    console.log(id)

    const { data, isLoading } = useGetDetailsOrderQuery()

    if (isLoading) return <Loader />

  return (
    <MainLayout>
        <OrderInformation />
    </MainLayout>
  )
}
