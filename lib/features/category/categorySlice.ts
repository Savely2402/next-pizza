import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '@/lib/store'

interface CategoryState {
    activeId: number
}

const initialState: CategoryState = {
    activeId: 1,
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveId: (state, action: PayloadAction<number>) => {
            state.activeId = action.payload
        },
    },
})

export const { setActiveId } = categorySlice.actions

export default categorySlice.reducer
