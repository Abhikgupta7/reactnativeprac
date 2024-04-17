import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        create(state, action) {
            state.push(action.payload)

        }
    },
})

export const { create } = groupSlice.actions
export default groupSlice.reducer