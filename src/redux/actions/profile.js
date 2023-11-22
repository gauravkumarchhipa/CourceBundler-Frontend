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
            `${server}/updateprofilepicture`,
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