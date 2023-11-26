import { server } from '../store';
import axios from 'axios';

// User updateprofile
export const getAllCourse = (category = "", keyword = "") => async dispatch => {
    try {
        dispatch({ type: 'allCourseRequest' });

        const { data } = await axios.get(
            `${server}/courses?keyword=${keyword}&category=${category}`,
        );
        dispatch({ type: 'allCourseSuccess', payload: data?.courses });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'allCourseFail', payload: error?.response?.data?.message });
    }
};