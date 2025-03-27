import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    token: string | null
    isAuthenticated: boolean
    user: { _id: string, email: string }
}

const initialState: IAuthState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    user: { _id: '', email: '' }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ token: string, _id: string, email: string }>) {
            const { token, _id, email } = action.payload
            state.token = token
            state.user._id = _id
            state.user.email = email
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload.token)
        },
        logout(state) {
            state.token = null
            state.user._id = ''
            state.user.email = ''
            state.isAuthenticated = false
            localStorage.removeItem('token')
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer