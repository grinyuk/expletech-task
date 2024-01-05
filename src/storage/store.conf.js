import {configureStore} from "@reduxjs/toolkit";

import modalReducer from "./slices/modal.slice";

const store = configureStore({
    reducer: {
        modalReducer
    }
})

export default store;