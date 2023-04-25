/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICartItem {
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
        removeItem(state, action: PayloadAction<number>) {
            state.items.filter((item) => item.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
