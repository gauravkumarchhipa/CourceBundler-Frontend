import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar';
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
const AdminCourses = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const courses = [
        {
            _id: "id1",
            title: "React Course",
            category: "web developmnet",
            poster: {
                url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            },
            createdBy: "dev guru",
            views: 123,
            numOfVideos: 12
        }, {
            _id: "id2",
            title: "Nextjs Course",
            category: "web developmnet",
            poster: {
                url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            },
            createdBy: "dev guru",
            views: 123,
            numOfVideos: 12
        }
    ];
    const courseDetailsHandler = (id) => {
        onOpen();
        console.log(id)
    }
    const deleteButtonHandler = (id) => {
        console.log(id)
    }
    const deleteLEctureButtonHandler = (courseId, lectureId) => {
        console.log(courseId);
        console.log(lectureId);
    }

    const addLectureHandler = (e, courseId, title, description, video) => {
        e.preventDefault();
    }

    return (
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
                                        <Row item={item} key={item?._id} courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler} />
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <CourseModal
                    isOpen={isOpen}
                    onClose={onClose}
                    id={"id"}
                    deleteButtonHandler={deleteLEctureButtonHandler}
                    addLectureHandler={addLectureHandler}
                    courseTitle={'React Course'}
                />
            </Box>
            <Sidebar />
        </Grid>
    )
}

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
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
                    <Button variant={"outline"} color={"purple.500"} onClick={() => courseDetailsHandler(item?._id)}>Change Lecttures</Button>
                    <Button color={'purple.600'} onClick={() => deleteButtonHandler(item?._id)}>
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default AdminCourses