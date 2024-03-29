import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducer/userReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;

export const server = "https://food-app-kbgt.onrender.com/api/v1/"