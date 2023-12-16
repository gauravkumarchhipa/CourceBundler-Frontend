import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar';
import Databox from './Databox';
import { DoughnutChart, LineChart } from './Chart';
import Bar from './Bar';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Layout/Loader';
import { getDashboardState } from '../../../redux/actions/admin';
const Dashboard = () => {
    const {
        loading,
        stats,
        subscriptionCount,
        subscriptionPercentage,
        subscriptionProfit,
        usersCount,
        usersPercentage,
        usersProfit,
        viewsCount,
        viewsPercentage,
        viewsProfit } = useSelector(state => state?.admin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashboardState());
    }, [dispatch])
    return (
        <Grid
            css={{ cursor: `url(${cursor}), default` }}
            minH={"100vh"}
            templateColumns={['1fr', '5fr 1fr']}
        >{
                loading ? <Loader color='purple.500' /> :
                    <Box boxSizing='border-box' py="16" px={['4', 0]}>
                        <Text textAlign={"center"} opacity={0.5} children={`Last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]}`} />
                        <Heading
                            children="Dashboard"
                            ml={['0', '16']}
                            mb={16}
                            textAlign={['center', 'left']}
                        />
                        <Stack
                            direction={["column", "row"]}
                            minH={24}
                            justifyContent={'space-evenly'}
                        >
                            <Databox title="View" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
                            <Databox title="Users" qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit} />
                            <Databox title="Subscription" qty={subscriptionCount} qtyPercentage={subscriptionPercentage} profit={subscriptionProfit} />
                        </Stack>

                        <Box
                            m={["0", "16"]}
                            borderRadius={"lg"}
                            p={["0", "16"]}
                            mt={["4", "16"]}
                            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                        >
                            <Heading
                                textAlign={["center", "left"]}
                                size={"md"}
                                children="Views Graph"
                                pt={["8", "0"]}
                                ml={["0", "16"]}
                            />
                            <LineChart views={stats?.map(item => item?.views)} />
                        </Box>

                        <Grid templateColumns={["1fr", "2fr 1fr"]}>
                            <Box p="4">
                                <Heading
                                    textAlign={["center", "left"]}
                                    size={"md"}
                                    children="Progress Bar"
                                    my={"8"}
                                    ml={["0", "16"]}
                                />
                                <Box>
                                    <Bar profit={viewsProfit} title="Views" value={viewsPercentage} />
                                    <Bar profit={usersProfit} title="Users" value={usersPercentage} />
                                    <Bar profit={subscriptionProfit} title="Subscription" value={subscriptionPercentage} />
                                </Box>
                            </Box>
                            <Box
                                p={["0", "16"]}
                                boxSizing='border-box'
                                py={4}
                            >
                                <Heading textAlign={"center"} size={"md"} children="Users" />
                                <DoughnutChart
                                    users={[subscriptionCount, usersCount - subscriptionCount]}
                                />
                            </Box>
                        </Grid>
                    </Box>
            }
            <Sidebar />
        </Grid>
    )
}
export default Dashboard