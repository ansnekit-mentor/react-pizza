/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFilterSlice {
    categoryId: number
    sort: ISort
}

export interface ISort {
    name: string
    value: string
}

const initialState: IFilterSlice = {
    categoryId: 0,
    sort: {
        name: 'Популярности',
        value: 'rating',
    },
}

export const counterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        changeSort(state, action: PayloadAction<ISort>) {
            state.sort = action.payload
        },
    },
})

export const { setCategoryId, changeSort } = counterSlice.actions

export default counterSlice.reducer
