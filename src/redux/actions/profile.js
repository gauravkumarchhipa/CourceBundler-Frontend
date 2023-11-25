import { server } from '../store';
import axios from 'axios';

// User updateprofile
export const updateProfile = (name, email) => async dispatch => {
    try {
        dispatch({ type: 'updateProfileRequest' });

        const { data } = await axios.put(
            `${server}/updateprofile`,
            { name, email },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'updateProfileSuccess', payload: data.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'updateProfileFail', payload: error?.response?.data?.message });
    }
};

// User change password
export const changePassword = (oldPassword, newPassword) => async dispatch => {
    try {
        dispatch({ type: 'changePasswordRequest' });

        const { data } = await axios.put(
            `${server}/changepassword`,
            { oldPassword, newPassword },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'changePasswordSuccess', payload: data.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'changePasswordFail', payload: error?.response?.data?.message });
    }
};

// User updateprofilepicture
export const updateProfilePicture = (formdata) => async dispatch => {
    try {
        dispatch({ type: 'updateProfilePictureRequest' });

        const { data } = await axios.put(
            `${server}/updateprofilepictures`,
            formdata,
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'updateProfilePictureSuccess', payload: data.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'updateProfilePictureFail', payload: error?.response?.data?.message });
    }
};


// User ForgetPassword
export const forgetPassword = (email) => async dispatch => {
    try {
        dispatch({ type: 'forgetPasswordRequest' });

        const { data } = await axios.post(
            `${server}/forgetpassword`,
            { email },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'forgetPasswordFail', payload: error?.response?.data?.message });
    }
};

// User Reset Password
export const resetPassword = (token, password) => async dispatch => {
    try {
        dispatch({ type: 'resetPasswordRequest' });

        const { data } = await axios.post(
            `${server}/resetpassword/${token}`,
            { password },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'resetPasswordSuccess', payload: data.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'resetPasswordFail', payload: error?.response?.data?.message });
    }
};
