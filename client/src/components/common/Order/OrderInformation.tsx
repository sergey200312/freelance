import { FC } from 'react';

interface IOrderInformationProps {
    _id: string;
    category: { name: string; parent?: { name: string } };
    client: { username: string };
    createdAt: Date;
    deadline: Date;
    price: number;
}

export const OrderInformation: FC<IOrderInformationProps> = ({ _id, category, client, createdAt, deadline, price }) => {
    return (
        <div className="mt-10 p-4 mx-auto w-full border text-white  border-sky-600 rounded-md shadow-default">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Заказ</h4>
                        <p>{_id}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Раздел</h4>
                        <p>{category?.name || 'Не указано'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Специализация</h4>
                        <p>{category?.parent?.name || 'Без категории'}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Заказчик</h4>
                        <p>{client?.username || 'Не указан'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Дата размещения</h4>
                        <p>{new Date(createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Срок сдачи</h4>
                        <p>{deadline ? new Date(deadline).toLocaleDateString() : 'Без срока'}</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Цена</h4>
                        <p>{price > 0 ? `${price} ₽` : 'Договорная'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
