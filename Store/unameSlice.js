import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
}

export const unameSlice = createSlice({
    name: 'uname',
    initialState,
    reducers: {
        userName: (state, action) => {
            state.name = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { userName } = unameSlice.actions

export default unameSlice.reducer