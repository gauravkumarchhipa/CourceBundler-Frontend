import { Box, Heading, Text } from "@chakra-ui/react";

export const TandC = ({ termsAndCondition }) => (
    <Box>
        <Heading
            size={'md'}
            children="Terms & Condition"
            textAlign={['center', 'left']}
            my="4"
        />
        <Box h="sm" p="4" overflowY={'scroll'}>
            <Text
                fontFamily={'heading'}
                letterSpacing={'widest'}
                textAlign={['center', 'left']}
            >
                {termsAndCondition}
            </Text>
            <Heading
                my="4"
                size={'xs'}
                children="Refund only applicable for cancellation within 7 days."
            />
        </Box>
    </Box>
);