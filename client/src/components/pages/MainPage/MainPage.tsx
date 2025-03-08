import { FC } from 'react'
import { useGetOrdersQuery } from '../../../store/api/orderApi'

export const MainPage: FC = () => {

    const { data }= useGetOrdersQuery()
    console.log(data)
  return (
    <div>
    </div>
  )
}
