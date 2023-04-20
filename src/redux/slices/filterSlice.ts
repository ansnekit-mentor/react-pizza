/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFilterSlice {
    categoryId: number
    sort: ISort
    search: string
    currentPage: number
}

export interface ISort {
    name: string
    value: string
}

interface IParams {
    category: number
    sort?: {
        name: string
        value: string
    }
    search: string
    page: number
}

const initialState: IFilterSlice = {
    categoryId: 0,
    sort: {
        name: 'Популярности',
        value: 'rating',
    },
    search: '',
    currentPage: 1,
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
        changeSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setParams(state, action: PayloadAction<IParams>) {
            if (action.payload.sort) {
                state.sort = action.payload.sort
            }
            state.categoryId = Number(action.payload.category)
            state.search = action.payload.search
            state.currentPage = Number(action.payload.page)
        },
    },
})

export const { setCategoryId, changeSort, changeSearch, setCurrentPage, setParams } =
    counterSlice.actions

export default counterSlice.reducer
