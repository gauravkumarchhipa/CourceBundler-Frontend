import { Button, Container, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition';
import { Founder } from './Founder';
import { TandC } from './TermAndCondition';
import { VideoPlayer } from './VideoPlayer';

const About = () => {
    return (
        <Container minH={'92vh'} maxW={"container.lg"} padding={16} boxShadow={"lg"}>
            <Heading children="About Us" textAlign={['center', 'left']} />
            <Founder />
            <Stack m="8" direction={['column', 'row']} alignItems={"center"}>
                <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
                    We are a video streaming platform with some premium courses available
                    only for premium users.
                </Text>
                <Link to="/subscribe">
                    <Button variant={'ghost'} colorScheme="yellow">
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>
            <VideoPlayer />
            <TandC termsAndCondition={termsAndCondition} />
            <HStack my="4" p={4}>
                <RiSecurePaymentFill />
                <Heading
                    size={"xs"}
                    fontFamily={"sans-serif"}
                    textTransform={'uppercase'}
                    children={'Payment is secured by Razorpay'} />
            </HStack>
        </Container>
    )
}
export default About