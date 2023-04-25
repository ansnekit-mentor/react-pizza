/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ICartItem {
    id: number
    title: string
    imageUrl: string
    price: number
    type: string
    size: number
    count: number
}

export interface ICartSlice {
    totalPrice: number
    items: Array<ICartItem>
}

const initialState: ICartSlice = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const findItem = state.items.find((el) => el.id === action.payload.id)
            if (findItem) {
                findItem.count += 1
            } else {
                state.items.push(action.payload)
            }
            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0)
        },
        countMinus(state, action: PayloadAction<number>) {
            const findItem = state.items.find((el) => el.id === action.payload)
            if (findItem && findItem.count > 1) {
                findItem.count -= 1
            }
            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0)
        },
        countPlus(state, action: PayloadAction<number>) {
            const findItem = state.items.find((el) => el.id === action.payload)
            if (findItem && findItem.count < 100) {
                findItem.count += 1
            }
            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0)
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, countMinus, countPlus, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
