import React, { FC } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { OrderInformation } from '../../common/Order/OrderInformation';
import { useParams } from 'react-router-dom';
import { useGetDetailsOrderQuery } from '../../../store/api/orderApi';
import { Loader } from '../../common/Loader/Loader';
import { useGetAllProposalsQuery } from '../../../store/api/proposalApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/createStore';
import { ProposalList } from '../../common/Proposal/ProposalList';

export const OrderDetailPage: FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.user._id);
  const { id } = useParams();

  const { data: orderData, isLoading: isOrderLoading } = useGetDetailsOrderQuery(String(id));

  const isCurrentUserOrder = orderData?.client?._id === currentUser;

  const { data: proposalData, isLoading: proposalIsLoading } = useGetAllProposalsQuery(String(id), {
    skip: !isCurrentUserOrder
  });


  return (
    <MainLayout>
      <div className='border bg-white border-sky-600 p-4 text-black rounded-md shadow-default'>
        <div>
          <h4 className='mt-4 mb-4 font-bold text-lg'>Детали заказа</h4>
          {isOrderLoading ? <Loader /> : orderData && (
            <OrderInformation
              _id={orderData._id}
              category={orderData.category}
              client={orderData.client}
              createdAt={orderData.createdAt}
              deadline={orderData.deadline}
              budget={orderData.budget}
            />
          )}
        </div>
        <div className='w-full h-[1px] bg-black mt-5'></div>
        <div className='mt-5'>
          <h3 className='text-lg font-bold mb-2'>Описание</h3>
          <p>{orderData?.description}</p>
        </div>
        {isCurrentUserOrder && (
          <div className='mt-5'>
            <h3 className='text-lg font-bold mb-2'>Список предложений к выполнению заказа</h3>
            {proposalIsLoading ? <Loader /> : proposalData && <ProposalList proposals={proposalData} />}
          </div>
        )}
      </div>
    </MainLayout>
  );
};