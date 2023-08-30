import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4';
const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [
        {
            _id: "a1",
            title: "Sample1",
            description: "sample asasasas",
            video: {
                url: "gggg",
            }
        },
        {
            _id: "a2",
            title: "Sample2",
            description: "sample asasasas",
            video: {
                url: "gggg",
            }
        },
        {
            _id: "a3",
            title: "Sample3",
            description: "sample asasasas",
            video: {
                url: "gggg",
            }
        }
    ]

    return (
        <Grid minH={"90vh"} templateColumns={['1fr', '3fr 1fr']} >
            <Box>
                <video
                    width={"100%"}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introVideo}
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
        </Grid>
    )
}
export default CoursePage