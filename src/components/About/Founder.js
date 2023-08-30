import { Avatar, Heading, Stack, Text, VStack } from "@chakra-ui/react";

export const Founder = () => (
    <Stack direction={['column', 'row']}
        spacing={['4', '16']}
        padding={8}
    >
        <VStack>
            <Avatar src='https://avatars.githubusercontent.com/u/93989396?v=4' boxSize={['40', '48']} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={"center"} alignItems={['center', 'flex-start']}>
            <Heading children="Gaurav Kumar" size={['md', 'xl']} />
            <Text
                textAlign={['center', 'left']}
                children={`Hi, I am a full-stack developer and a teacher. Our mission is to provide quality content at reasonable price.`} />
        </VStack>
    </Stack>
);