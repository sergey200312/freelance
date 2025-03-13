import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constats'
import { MainPage } from '../components/pages/MainPage/MainPage'
import { RegisterPage } from '../components/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/pages/LoginPage/LoginPage'
import { OrderDetailPage } from '../components/pages/OrderDetailPage/OrderDetailPage'
import { PrivateRouter } from '../components/PrivateRouter'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRouter />}>
                <Route path={ROUTES.ORDERDETAILS} element={<OrderDetailPage />} />
                <Route path={ROUTES.MAIN} element={<MainPage />} />
            </Route>
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.ORDERDETAILS} element={<OrderDetailPage />} />
        </Routes>
    )
}