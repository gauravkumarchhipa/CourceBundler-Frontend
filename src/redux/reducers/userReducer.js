import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
    {},
    {
        // login
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        // register
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        // logout
        logoutRequest: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = action.payload.message;
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },


        // user details
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loadUserFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        // update profile picture
        updateProfilePictureRequest: (state) => {
            state.loading = true;
        },
        updateProfilePictureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfilePictureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
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