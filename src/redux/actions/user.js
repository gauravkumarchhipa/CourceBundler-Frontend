import { server } from '../store';
import axios from 'axios';

// User Login
export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(
            `${server}/login`,
            { email, password },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'loginFail', payload: error?.response?.data?.message });
    }
};

// User Register
export const register = (formdata) => async dispatch => {
    try {
        dispatch({ type: 'registerRequest' });

        const { data } = await axios.post(
            `${server}/register`,
            formdata,
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'registerFail', payload: error?.response?.data?.message });
    }
};


// logout
export const logout = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'logoutRequest' });

        const { data } = await axios.get(
            `${server}/logout`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'logoutSuccess', payload: data });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'logoutFail', payload: error?.response?.data?.message });
    }
};

// user profile details
export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'loadUserRequest' });
        const { data } = await axios.get(
            `${server}/me`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'loadUserFail', payload: error?.response?.data?.message });
    }
};