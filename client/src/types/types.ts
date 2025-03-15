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