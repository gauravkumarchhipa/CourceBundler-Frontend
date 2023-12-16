import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
    {},
    {
        // Get admin state
        getAdminStateRequest: (state) => {
            state.loading = true;
        },
        getAdminStateSuccess: (state, action) => {
            state.loading = false;
            state.stats = action.payload.stats;
            state.usersCount = action.payload.usersCount;
            state.subscriptionCount = action.payload.subscriptionCount;
            state.viewsCount = action.payload.viewsCount;
            state.subscriptionPercentage = action.payload.subscriptionPercentage;
            state.viewsPercentage = action.payload.viewsPercentage;
            state.usersPercentage = action.payload.usersPercentage;
            state.subscriptionProfit = action.payload.subscriptionProfit;
            state.viewsProfit = action.payload.viewsProfit;
            state.usersProfit = action.payload.usersProfit;
        },
        getAdminStatefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // Get All users
        getAllUsersRequest: (state) => {
            state.loading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        getAllUsersfail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // Delete users
        deleteUsersRequest: (state) => {
            state.loading = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteUsersfail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // update user role
        updateUserRoleRequest: (state) => {
            state.loading = true;
        },
        updateUserRoleSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateUserRolefail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

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