import { server } from '../store';
import axios from 'axios';

// get All Cource List
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


export const getCourseLectures = (id) => async dispatch => {
    try {
        dispatch({ type: 'getCourseRequest' });

        const { data } = await axios.get(
            `${server}/course/${id}`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'getCourseSuccess', payload: data?.lectures });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'getCourseFail', payload: error?.response?.data?.message });
    }
};