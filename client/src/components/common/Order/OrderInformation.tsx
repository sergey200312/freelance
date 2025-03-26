import { FC } from 'react';

interface IOrderInformationProps {
    _id: string;
    category: { name: string; parent?: { name: string } };
    client: { username: string };
    createdAt: Date;
    deadline: Date;
    budget: number;
}

export const OrderInformation: FC<IOrderInformationProps> = ({ _id, category, client, createdAt, deadline, budget }) => {
    return (
        <div className="mx-auto w-full  text-black">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Заказ</h4>
                        <p className='text-gray-600 italic'>{_id}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Раздел</h4>
                        <p className='text-gray-600 italic'>{category?.name || 'Не указано'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Специализация</h4>
                        <p className='text-gray-600 italic'>{category?.parent?.name || 'Без категории'}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Заказчик</h4>
                        <p className='text-blue-500'>{client?.username || 'Не указан'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Дата размещения</h4>
                        <p className='text-gray-600 italic'>{new Date(createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Срок сдачи</h4>
                        <p className='text-gray-600 italic'>{deadline ? new Date(deadline).toLocaleDateString() : 'Без срока'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Бюджет</h4>
                        <p className='text-amber-500 font-semibold'>{budget > 0 ? `${budget} ₽` : 'Договорная'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
