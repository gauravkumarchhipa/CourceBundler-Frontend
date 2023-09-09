import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducer";
// export const server = 'https://course-bundler-server-e1dx.onrender.com/api/v1';
export const server = 'http://localhost:4000/api/v1';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;