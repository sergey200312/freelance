import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constats'
import { MainPage } from '../components/pages/MainPage/MainPage'
import { RegisterPage } from '../components/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/pages/LoginPage/LoginPage'
import { OrderDetailPage } from '../components/pages/OrderDetailPage/OrderDetailPage'
import { PrivateRouter } from '../components/PrivateRouter'
import { CreateOrder } from '../components/pages/CreateOrder/CreateOrder'
import { MyPosterOrders } from '../components/pages/MyPosterOrders/MyPosterOrders'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRouter />}>
                <Route path={ROUTES.ORDERDETAILS} element={<OrderDetailPage />} />
                <Route path={ROUTES.MAIN} element={<MainPage />} />
                <Route path={ROUTES.CREATEORDER} element={<CreateOrder />} />
                <Route path={ROUTES.MYPOSTERORDERS} element={<MyPosterOrders />} />
            </Route>
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.ORDERDETAILS} element={<OrderDetailPage />} />
        </Routes>
    )
}