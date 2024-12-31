import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalOpen: false,
};

const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        modalFunc: (state) => {
            state.modalOpen = !state.modalOpen;
        },
    },
});

export const { modalFunc } = modelSlice.actions;
export default modelSlice.reducer;
