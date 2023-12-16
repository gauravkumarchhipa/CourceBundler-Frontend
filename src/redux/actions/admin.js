import { server } from "../store";
import axios from "axios";

export const createCourse = (formdata) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        }

        dispatch({ type: 'createCourseRequest' });

        const { data } = await axios.post(
            `${server}/createcourse`,
            formdata,
            config
        );
        dispatch({ type: 'createCourseSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'createCoursefail', payload: error?.response?.data?.message });
    }
};

export const deleteCourse = (id) => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'deleteCourseRequest' });

        const { data } = await axios.delete(
            `${server}/course/${id}`,
            config
        );
        dispatch({ type: 'deleteCourseSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'deleteCoursefail', payload: error?.response?.data?.message });
    }
};

export const createLecture = (id, formdata) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        }

        dispatch({ type: 'addLectureRequest' });

        const { data } = await axios.post(
            `${server}/course/${id}`,
            formdata,
            config
        );
        dispatch({ type: 'addLectureSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'addLecturefail', payload: error?.response?.data?.message });
    }
};

export const deleteLecture = (courseId, lectureId) => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'deleteLectureRequest' });

        const { data } = await axios.delete(
            `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
            config
        );
        dispatch({ type: 'deleteLectureSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'deleteLecturefail', payload: error?.response?.data?.message });
    }
};


export const getAllUSers = () => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'getAllUsersRequest' });

        const { data } = await axios.get(
            `${server}/admin/users`,
            config
        );
        dispatch({ type: 'getAllUsersSuccess', payload: data?.users });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'getAllUsersfail', payload: error?.response?.data?.message });
    }
};

export const updateUserRole = (id) => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'updateUserRoleRequest' });

        const { data } = await axios.put(
            `${server}/admin/user/${id}`, {},
            config
        );
        dispatch({ type: 'updateUserRoleSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'updateUserRolefail', payload: error?.response?.data?.message });
    }
};

export const deleteUser = (id) => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'deleteUsersRequest' });

        const { data } = await axios.delete(
            `${server}/admin/user/${id}`,
            config
        );
        dispatch({ type: 'deleteUsersSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'deleteUsersfail', payload: error?.response?.data?.message });
    }
};

export const getDashboardState = () => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }

        dispatch({ type: 'getAdminStateRequest' });

        const { data } = await axios.get(
            `${server}/admin/stats`,
            config
        );
        dispatch({ type: 'getAdminStateSuccess', payload: data });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'getAdminStatefail', payload: error?.response?.data?.message });
    }
};