import { Button, Container, HStack, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Course } from './Course';

const Courses = () => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    console.log(category);
    const categories = [
        "web development", "Artificial Intellegence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Developement"
    ];
    const addToPlaylistHandler = () => {
        console.log("Add to playList")
    }
    return (
        <Container minH={'95vh'} maxW={"container.lg"} paddingY={8}>
            <Heading children="All Courses" m={8} />
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Searcg a course...'
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
                <Course
                    title={"Sample"}
                    description={"Sample"}
                    views={23}
                    imageSrc={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}
                    id={"sample"}
                    creator={"Sample boy"}
                    lectureCount={2}
                    addToPlaylistHandler={addToPlaylistHandler}
                />
            </Stack>
        </Container>
    )
}
export default Courses