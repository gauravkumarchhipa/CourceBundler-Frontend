import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
    {},
    {
        // create Course
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
        },

        // delete course
        deleteCourseRequest: (state) => {
            state.loading = true;
        },
        deleteCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteCoursefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // Add Lecture
        addLectureRequest: (state) => {
            state.loading = true;
        },
        addLectureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addLecturefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // Delete Lecture
        deleteLectureRequest: (state) => {
            state.loading = true;
        },
        deleteLectureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteLecturefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // clear Error
        clearError: (state) => {
            state.error = null;
        },

        // clear message
        clearMessage: (state) => {
            state.message = null;
        }
    }
);