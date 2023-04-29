/* eslint-disable no-param-reassign */
import axios from 'axios'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPizzaBlock, IPizzasParams } from '../../types'
import { RootState } from '../store'

export const fetchPizzas = createAsyncThunk(
    'piza/fetchPizzaStatus',
    async (params: IPizzasParams) => {
        const config = { params }
        const { data } = await axios.get(
            'https://642c86dbbf8cbecdb4f2a883.mockapi.io/api/items',
            config,
        )

        return data
    },
)

interface IPizzaSlice {
    items: IPizzaBlock[]
    status: '' | 'loading' | 'complete' | 'error'
}

const initialState: IPizzaSlice = {
    items: [],
    status: '',
}

export const pizaSlice = createSlice({
    name: 'piza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<IPizzaBlock[]>) {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state: RootState) => {
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state: RootState, action: PayloadAction) => {
            state.status = 'complete'
            state.items = action.payload
        },
        [fetchPizzas.rejected]: (state: RootState) => {
            state.status = 'error'
            state.items = []
        },
    },
})

export const selectPizza = (state: RootState) => state.pizza
export const { setItems } = pizaSlice.actions
export default pizaSlice.reducer
