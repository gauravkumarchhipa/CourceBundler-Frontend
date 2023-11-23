import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
export const server =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/v1'
    : 'https://course-bundler-server-e1dx.onrender.com/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
