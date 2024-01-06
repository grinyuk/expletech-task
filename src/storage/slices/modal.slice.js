import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        visible: false,
        product: null
    },
    reducers: {
        openModal: (state, action) => {
            state.visible = true;
            state.product = action.payload;
        },
        closeModal: (state, action) => {
            state.visible = false;
            state.product = null;
        }
    },
})

const modalReducer = modalSlice.reducer;

export const {
    openModal,
    closeModal
} = modalSlice.actions;

export default modalReducer;