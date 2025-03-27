import React, { FC } from 'react';
import { MainLayout } from '../../../layouts/MainLayout';
import { OrderInformation } from '../../common/Order/OrderInformation';
import { useParams } from 'react-router-dom';
import { useGetDetailsOrderQuery } from '../../../store/api/orderApi';
import { Loader } from '../../common/Loader/Loader';
import { useGetAllProposalsQuery } from '../../../store/api/proposalApi';
import ProposalList from '../../common/Proposal/ProposalList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/createStore';

export const OrderDetailPage: FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.user._id);
  const { id } = useParams();

  const { data, isLoading } = useGetDetailsOrderQuery(String(id));
  console.log(data)
  const { data: proposalData, isLoading: proposalIsLoading } = useGetAllProposalsQuery(String(id));

  const isCurrentUserOrder = data?.client?._id === currentUser;

  return (
    <MainLayout>
      <div className='border bg-gray-200 border-sky-600 p-4 text-black rounded-md shadow-default'>
        <div>
          <h4 className='mt-4 mb-4 font-bold text-lg'>Детали заказа</h4>
          {isLoading ? <Loader /> : data && (
            <OrderInformation
              _id={data._id}
              category={data.category}
              client={data.client}
              createdAt={data.createdAt}
              deadline={data.deadline}
              budget={data.budget}
            />
          )}
        </div>
        <div className='w-full h-[1px] bg-black mt-5'></div>
        <div className='mt-5'>
          <h3 className='text-lg font-bold mb-2'>Описание</h3>
          <p>{data?.description}</p>
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