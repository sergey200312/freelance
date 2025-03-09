import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constats'
import { MainPage } from '../components/pages/MainPage/MainPage'
import { RegisterPage } from '../components/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/pages/LoginPage/LoginPage'


export const AppRoutes = () => {
    return (
            <Routes>
                <Route path={ROUTES.MAIN} element={<MainPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Routes>
    )
}