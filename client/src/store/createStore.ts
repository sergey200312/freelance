import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";


export const createStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware)
})