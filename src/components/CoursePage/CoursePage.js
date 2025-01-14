import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import introVideo from '../../assets/videos/intro.mp4';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Layout/Loader';
const CoursePage = ({ user }) => {
    const [lectureNumber, setLectureNumber] = useState(0);

    const { lectures, loading } = useSelector(state => state.course);

    // const lectures = [
    //     {
    //         _id: "a1",
    //         title: "Sample1",
    //         description: "sample asasasas",
    //         video: {
    //             url: "gggg",
    //         }
    //     },
    //     {
    //         _id: "a2",
    //         title: "Sample2",
    //         description: "sample asasasas",
    //         video: {
    //             url: "gggg",
    //         }
    //     },
    //     {
    //         _id: "a3",
    //         title: "Sample3",
    //         description: "sample asasasas",
    //         video: {
    //             url: "gggg",
    //         }
    //     }
    // ]

    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(getCourseLectures(params?.id));
    }, [dispatch, params]);

    if (user?.role !== "admin" && (user?.subscription === undefined || user.subscription.status !== "active")) {
        return <Navigate to={'/subscribe'} />
    }

    return (
        loading ? <Loader /> :
            <Grid minH={"90vh"} templateColumns={['1fr', '3fr 1fr']} >
                {
                    lectures && lectures?.length > 0 ?
                        <>
                            <Box>
                                <video
                                    width={"100%"}
                                    controls
                                    controlsList="nodownload noremoteplayback"
                                    disablePictureInPicture
                                    disableRemotePlayback
                                    src={lectures[lectureNumber]?.video?.url}
                                >
                                </video>
                                <Heading m={4} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                                <Heading m={4} children="Description" />
                                <Text m="4" children={lectures[lectureNumber].description} />
                            </Box>
                            <VStack>
                                {
                                    lectures?.map((data, i) => (
                                        <Button
                                            onClick={() => setLectureNumber(i)}
                                            key={data?._id}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                textAlign: 'center',
                                                margin: 0,
                                                borderBottom: '1px solid rgba(0,0,0,0.2)',
                                            }}
                                        >
                                            <Text noOfLines={1}>
                                                #{i + 1} {data?.title}
                                            </Text>
                                        </Button>
                                    ))
                                }
                            </VStack>
                        </> :
                        <Heading children="No Lectures" />
                }
            </Grid>
    )
}
export default CoursePage