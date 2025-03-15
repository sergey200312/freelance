import { FC, ReactNode } from 'react'
import { Header } from '../components/common/Header/Header'
import { ServiceOverview } from '../components/common/ServiceOverview/ServiceOverview.tsx'

interface IMainLayoutProps {
    children: ReactNode,
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className='grid grid-cols-4 gap-4 p-6 '>
                <div className='col-span-1'>
                    <ServiceOverview />
                </div>
                <div className='col-span-2'>
                    {children}
                </div>
                <div className='col-span-1'>
                </div>
            </div>
        </div>
    )
}
