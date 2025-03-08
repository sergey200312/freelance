import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import { baseApi } from "./api/baseApi";
import { authApi } from "./api/authApi";


export const createStore = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware, baseApi.middleware),
    
})

export type RootState = ReturnType<typeof createStore.getState>;
export type AppDispatch = typeof createStore.dispatch;