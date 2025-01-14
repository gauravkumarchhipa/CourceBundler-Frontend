import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer(
    { courses: [], lectures: [] },
    {
        // get All Course in search
        allCourseRequest: (state) => {
            state.loading = true;
        },
        allCourseSuccess: (state, action) => {
            state.loading = false;
            state.courses = action.payload
        },
        allCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        // get Course lectures
        getCourseRequest: (state) => {
            state.loading = true;
        },
        getCourseSuccess: (state, action) => {
            state.loading = false;
            state.lectures = action.payload
        },
        getCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        // add to playlist
        addToPlaylistRequest: (state) => {
            state.loading = true;
        },
        addToPlaylistSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload
        },
        addToPlaylistFail: (state, action) => {
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