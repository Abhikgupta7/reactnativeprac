import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)

        },
    },
});

export const { add } = contactSlice.actions;
export default contactSlice.reducer;
