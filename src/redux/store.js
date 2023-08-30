import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
export const server = 'https://course-bundler-server-e1dx.onrender.com/api/v1';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;