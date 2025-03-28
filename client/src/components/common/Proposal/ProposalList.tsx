import React, { FC } from 'react'
import { IProposal } from '../../../types/types'
import { ProposalItem } from './ProposalItem'

interface IproposalListProps {
  proposals: IProposal[]
}
export const ProposalList: FC<IproposalListProps> = ({ proposals }) => {
  console.log(proposals)
  return (
    <div>
      {proposals && proposals.length ? (
        proposals.map((proposal) => (
          <ProposalItem
            key={proposal._id}
            freelancer={proposal.freelancer}
            comment={proposal.comment}
            proposedPrice={proposal.proposedPrice}
            status={proposal.status}
          />
        ))
      ) : (<div>Список предложений пуст</div>)}
    </div>
  )
}
