import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer({}, {
    // profile update
    updateProfileRequest: (state) => {
        state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // change password
    changePasswordRequest: (state) => {
        state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // forget password
    forgetPasswordRequest: (state) => {
        state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // reset password
    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // remove playlist
    removePlaylistRequest: (state) => {
        state.loading = true;
    },
    removePlaylistSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    removePlaylistFail: (state, action) => {
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
});