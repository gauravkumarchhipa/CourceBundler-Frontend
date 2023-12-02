import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
    {},
    {
        createCourseRequest: (state) => {
            state.loading = true;
        },
        createCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        createCoursefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
);