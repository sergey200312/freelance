import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IFilterState {
    searchQuery: string
}

const initialState: IFilterState = {
    searchQuery: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState, 
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload
        }
    }
})

export const { setSearchQuery } = filterSlice.actions
export default filterSlice.reducer
