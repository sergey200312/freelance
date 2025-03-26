export interface IRegisterUser {
    username: string,
    email: string,
    password: string,
}

export interface ILoginUser {
    email: string,
    password: string
}

export interface IOrderData {
    title: string,
    description: string,
    specialization: string,
    budget: number | null,
    deadline?: Date
}

export interface IGetOrder {
    _id: string;
    category: { name: string; parent?: { name: string } };
    title: string;
    budget: string;
    status: OrderStatus;
    createdAt: Date;
    deadline: Date | string;
    client: { avatar_url: string; username: string };
}

export type OrderStatus = 'open' | 'in_progress' | 'completed';