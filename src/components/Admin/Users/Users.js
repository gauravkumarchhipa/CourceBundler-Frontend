import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar';
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
const Users = () => {
    const users = [
        {
            _id: "id1",
            name: "Gaurav",
            role: "admin",
            subscription: {
                status: "active"
            },
            email: "gauravchiipa295@gmail.com"
        }, {
            _id: "id2",
            name: "Gaurav",
            role: "admin",
            subscription: {
                status: "active"
            },
            email: "gauravchiipa295@gmail.com"
        }
    ];
    const updateHandler = (id) => {
        console.log(id)
    }
    const deleteButtonHandler = (id) => {
        console.log(id)
    }
    return (
        <Grid
            css={{ cursor: `url(${cursor}), default` }}
            minH={"100vh"}
            templateColumns={['1fr', '5fr 1fr']}>
            <Box p={["0", "16"]} overflowX={"auto"}>
                <Heading textTransform={'uppercase'} children="All Users" my={16} textAlign={["center", "left"]} />
                <TableContainer w={["100vw", "full"]}>
                    <Table variant={"simple"} size={"lg"}>
                        <TableCaption>All available users in the database</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users?.map((item) => {
                                    return (
                                        <Row item={item} key={item?._id} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} />
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Sidebar />
        </Grid>
    )
}
export default Users

function Row({ item, updateHandler, deleteButtonHandler }) {
    return (
        <Tr>
            <Td>#{item?._id}</Td>
            <Td>{item?.name}</Td>
            <Td>{item?.email}</Td>
            <Td>{item?.role}</Td>
            <Td>{item?.subscription?.status === 'activ' ? 'Active' : 'Not Active'}</Td>
            <Td isNumeric>
                <HStack justifyContent={"flex-end"}>
                    <Button variant={"outline"} color={"purple.500"} onClick={() => updateHandler(item?._id)}>Change Role</Button>
                    <Button color={'purple.600'} onClick={() => deleteButtonHandler(item?._id)}>
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}