import React, { useEffect } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar';
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUSers, updateUserRole } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
const Users = () => {
    const { users, loading, error, message } = useSelector(state => state?.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUSers());
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error, message])

    const updateHandler = async (id) => {
        await dispatch(updateUserRole(id));
    }
    const deleteButtonHandler = async (id) => {
        await dispatch(deleteUser(id));
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
                                users && users?.map((item) => {
                                    return (
                                        <Row item={item} key={item?._id} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} loading={loading} />
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

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
    return (
        <Tr>
            <Td>#{item?._id}</Td>
            <Td>{item?.name}</Td>
            <Td>{item?.email}</Td>
            <Td>{item?.role}</Td>
            <Td>{item?.subscription?.status === 'active' ? 'Active' : 'Not Active'}</Td>
            <Td isNumeric>
                <HStack justifyContent={"flex-end"}>
                    <Button variant={"outline"} color={"purple.500"} isLoading={loading} onClick={() => updateHandler(item?._id)}>Change Role</Button>
                    <Button color={'purple.600'} onClick={() => deleteButtonHandler(item?._id)} isLoading={loading}>
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}