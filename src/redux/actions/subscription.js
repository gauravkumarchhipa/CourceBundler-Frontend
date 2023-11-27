import { server } from '../store';
import axios from 'axios';

// Buy Subscription
export const buySubscription = (id) => async dispatch => {
    try {
        dispatch({ type: 'buySubscriptionRequest' });

        const { data } = await axios.get(
            `${server}/subscribe`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'buySubscriptionSuccess', payload: data?.subscriptionId });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'buySubscriptionFail', payload: error?.response?.data?.message });
    }
};

// cancel Subscription
export const cancelSubscription = () => async dispatch => {
    try {
        dispatch({ type: 'cancelSubscriptionRequest' });

        const { data } = await axios.delete(
            `${server}/subscribe/cancel`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'cancelSubscriptionSuccess', payload: data?.message });
    } catch (error) {
        console.log(error, "error");
        dispatch({ type: 'cancelSubscriptionFail', payload: error?.response?.data?.message });
    }
};