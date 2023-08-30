import { Button, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
export const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={"60"} objectFit={'contain'} />
            <Heading textAlign={["center", "left"]} size={'sm'} maxW={"200px"} fontFamily={"sans-serif"} noOfLines={3} children={title} />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text fontWeight={"bold"} textTransform={"uppercase"} children={"creator"} />
                <Text fontFamily={"body"} textTransform={"uppercase"} children={creator} />
            </HStack>
            <Heading textAlign={"center"} size={"xs"} children={`Lectures - ${lectureCount}`} textTransform={"uppercase"} />
            <Heading size={"xs"} children={`Views - ${views}`} textTransform={"uppercase"} />
            <Stack direction={["column", "row"]} alignItems={"center"}>
                <Link to={`/courses/${id}`}>
                    <Button colorScheme='yellow'>Watch Now</Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={() => addToPlaylistHandler(id)}>Add to playList</Button>
            </Stack>
        </VStack>
    )
}