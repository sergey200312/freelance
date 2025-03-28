import React, { FC } from 'react'
import { ProposalStatus } from '../../../types/types'
import { proposalStatus } from '../../../constants/proposalStatus'


interface IProposalItemProps {
  freelancer: { username: string, avatar_url: string }
  comment?: string,
  proposedPrice: number,
  status: ProposalStatus

}
export const ProposalItem: FC<IProposalItemProps> = ({ freelancer, comment, proposedPrice, status }) => {
  return (
    <div className='p-4 border border-black border-solid rounded-2xl flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <img src={freelancer?.avatar_url} alt={freelancer?.username} width={30} height={30} className='rounded-md object-cover' />
          <p className='text-xl text-blue-600'>{freelancer?.username}</p>
        </div>
        <div className='flex gap-1'>
          <button className='rounded-full hover:bg-gray-300'>
            <img src='/three-dots-vertical-svgrepo-com.svg' alt='3 точки' height={15} width={15} />
          </button>
          <div className={`flex gap-2 p-1 rounded-md ${proposalStatus[status].bgcolor}`}>
            <img src={proposalStatus[status].img} alt={proposalStatus[status].name} height={15} width={15} />
            <p className='text-sm'>{proposalStatus[status].name}</p>
          </div>
        </div>
      </div>
      <p className='text-gray-700'>{comment || 'Комментарий отсутствует'}</p>
      <p>Предложенная цена: <span className='text-xl text-amber-500'>{proposedPrice}</span></p>
    </div>
  )
}
