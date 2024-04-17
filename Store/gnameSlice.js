import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
}

export const gnameSlice = createSlice({
    name: 'gname',
    initialState,
    reducers: {
        groupName: (state, action) => {
            state.name = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { groupName } = gnameSlice.actions

export default gnameSlice.reducer