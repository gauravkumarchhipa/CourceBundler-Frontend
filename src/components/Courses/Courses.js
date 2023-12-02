import { Button, Container, HStack, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Course } from './Course';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Courses = () => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const { loading, courses, error, message } = useSelector(state => state.course)
    const categories = [
        "web development", "Artificial Intellegence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Developement"
    ];
    const addToPlaylistHandler = async (courseId) => {
        await dispatch(addToPlaylist(courseId));
        dispatch(loadUser());
    }
    useEffect(() => {
        dispatch(getAllCourse(category, keyword));

    }, [dispatch, category, keyword,]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }
    }, [error, message, dispatch])

    return (
        <Container minH={'95vh'} maxW={"container.lg"} paddingY={8}>
            <Heading children="All Courses" m={8} />
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a course...'
                type={'text'}
                focusBorderColor="yellow.500"
            />
            <HStack
                overflowX={"auto"}
                paddingY={8}
                css={{ "&::-webkit-scrollbar": { display: "none" } }}>
                {
                    categories?.map((data, i) => (
                        <Button onClick={() => setCategory(data)} minW={'60'} key={i}>
                            <Text children={data} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack
                direction={["column", "row"]}
                flexWrap={"wrap"}
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={['center', 'flex-start']}
            >
                {
                    courses?.length > 0 ?
                        courses?.map((data) => (
                            <Course
                                key={data?._id}
                                title={data?.title}
                                description={data?.description}
                                views={data?.views}
                                imageSrc={data?.poster.url}
                                id={data?._id}
                                creator={data?.createdBy}
                                lectureCount={data?.numOfVideos}
                                addToPlaylistHandler={addToPlaylistHandler}
                                loading={loading}
                            />
                        ))
                        :
                        <Heading children="Course Not Found" mt={4} />
                }

            </Stack>
        </Container>
    )
}
export default Courses