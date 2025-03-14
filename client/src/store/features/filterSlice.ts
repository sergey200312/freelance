import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IFilterState {
    searchTerm: string,
    categoryName: string,
    specializationName: string
}

const initialState: IFilterState = {
    searchTerm: '',
    categoryName: '',
    specializationName: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState, 
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload
        },
        setCategoryName(state, action: PayloadAction<string>) {
            state.categoryName = action.payload
        },
        setSpecializationName(state, action: PayloadAction<string>) {
            state.specializationName = action.payload
        }
    }
})

export const { 
    setSearchQuery,
    setCategoryName,
    setSpecializationName
} = filterSlice.actions
export default filterSlice.reducer
