import { useSelector } from "react-redux"
import { RootState } from "../store/createStore"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRouter = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)

   return isAuthenticated ? <Outlet /> : <Navigate to = '/login'/>
}