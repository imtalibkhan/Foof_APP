import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducer/userReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;

export const server = "https://myfoodapp.onrender.com/api/v1"