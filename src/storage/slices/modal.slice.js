import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        visible: false
    },
    reducers: {
        openModal: (state, action) => {
            state.visible = true;
        },
        closeModal: (state, action) => {
            state.visible = false;
        }
    },
})

const modalReducer = modalSlice.reducer;

export const {

} = modalSlice.actions;

export default modalReducer;