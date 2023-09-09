import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, userReducer } from "./Reducers/userReducer";
// export const server = 'https://course-bundler-server-e1dx.onrender.com/api/v1';
export const server = 'http://localhost:4000/api/v1';

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer
    }
});

export default store;