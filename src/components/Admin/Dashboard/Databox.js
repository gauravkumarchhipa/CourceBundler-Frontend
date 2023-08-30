import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowUpLine } from 'react-icons/ri'

const Databox = ({ title, qty, qtyPercentage, profit }) => {
    return (
        <Box
            w={["full", "20%"]}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
            p="8"
            borderRadius={'lg'}
        >
            <Text children={title} />
            <HStack spacing={6}>
                <Text fontSize={"2xl"} fontWeight={"bold"} children={qty} />
                <HStack>
                    <Text children={`${qtyPercentage}%`} />
                    {profit ? <RiArrowUpLine color='green' /> : <RiArrowUpLine color='red' />}
                </HStack>
            </HStack>
            <Text opacity={0.6} children={'Since last Month'} />
        </Box>
    )
}

export default Databox