import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { profileReducer } from './reducers/profileReducer';
import { courseReducer } from './reducers/courseReducer';
import { subsriptionReducer } from './reducers/subsription';
import { adminReducer } from './reducers/adminReducer';
export const server =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/v1'
    : 'https://course-bundler-server-e1dx.onrender.com/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subsriptionReducer,
    admin: adminReducer
  },
});

export default store;
