import React, { useEffect, useState } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar';
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse, getCourseLectures } from '../../../redux/actions/course';
import { createLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
import Loader from '../../Layout/Loader';
const AdminCourses = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [courseId, setCourseId] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const { courses, lectures, loading, error, message } = useSelector(state => state?.course);
    const { loading: deleteLoading, error: deleteError, message: deleteMessage } = useSelector(state => state?.admin);
    const dispatch = useDispatch();

    const courseDetailsHandler = (courseId, courseTitle) => {
        dispatch(getCourseLectures(courseId));
        setCourseId(courseId);
        setCourseTitle(courseTitle);
        onOpen();
    }
    const deleteButtonHandler = async (courseId) => {
        await dispatch(deleteCourse(courseId));
    }
    const deleteLectureButtonHandler = async (courseId, lectureId) => {
        await dispatch(deleteLecture(courseId, lectureId));
        await dispatch(getCourseLectures(courseId));
    }

    const addLectureHandler = async (e, courseId, title, description, video) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('file', video);
        await dispatch(createLecture(courseId, myForm));
        await dispatch(getCourseLectures(courseId));
    }

    useEffect(() => {
        dispatch(getAllCourse());
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (deleteMessage) {
            toast.success(deleteMessage);
            dispatch({ type: 'clearMessage' });
        }
        if (deleteError) {
            toast.error(deleteError);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, message, error, deleteError, deleteMessage])

    return (
        loading ? <Loader /> :
            <Grid
                css={{ cursor: `url(${cursor}), default` }}
                minH={"100vh"}
                templateColumns={['1fr', '5fr 1fr']}>
                <Box p={["0", "8"]} overflowX={"auto"}>
                    <Heading textTransform={'uppercase'} children="All Users" my={16} textAlign={["center", "left"]} />
                    <TableContainer w={["100vw", "full"]}>
                        <Table variant={"simple"} size={"lg"}>
                            <TableCaption>All available courses in the database</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Poster</Th>
                                    <Th>Title</Th>
                                    <Th>Category</Th>
                                    <Th>Creator</Th>
                                    <Th isNumeric>Views</Th>
                                    <Th isNumeric>Lectures</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    courses?.map((item) => {
                                        return (
                                            <Row item={item} key={item?._id} courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler} loading={loading} deleteLoading={deleteLoading} />
                                        )
                                    })
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <CourseModal
                        isOpen={isOpen}
                        onClose={onClose}
                        id={courseId}
                        deleteButtonHandler={deleteLectureButtonHandler}
                        addLectureHandler={addLectureHandler}
                        courseTitle={courseTitle}
                        lectures={lectures}
                        loading={deleteLoading}
                    />
                </Box>
                <Sidebar />
            </Grid>
    )
}

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading, deleteLoading }) {
    return (
        <Tr>
            <Td>#{item?._id}</Td>
            <Td><Image src={item?.poster?.url} /></Td>
            <Td>{item?.title}</Td>
            <Td textTransform={'uppercase'}>{item?.category}</Td>
            <Td>{item?.createdBy}</Td>
            <Td isNumeric>{item?.views}</Td>
            <Td isNumeric>{item?.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={"flex-end"}>
                    <Button variant={"outline"} color={"purple.500"} onClick={() => courseDetailsHandler(item?._id, item?.title)} isLoading={loading}>Change Lecttures</Button>
                    <Button color={'purple.600'} onClick={() => deleteButtonHandler(item?._id)} isLoading={deleteLoading}>
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default AdminCourses