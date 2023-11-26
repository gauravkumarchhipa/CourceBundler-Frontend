import { createReducer } from "@reduxjs/toolkit";

export const subsriptionReducer = createReducer(
    {},
    {
        // buySbscription
        buySubscriptionRequest: (state) => {
            state.loading = true;
        },
        buySubscriptionSuccess: (state, action) => {
            state.loading = false;
            state.subscriptionId = action.payload;
        },
        buySubscriptionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Cancel Sbscription
        cancelSubscriptionRequest: (state) => {
            state.loading = true;
        },
        cancelSubscriptionSuccess: (state, action) => {
            state.loading = false;
            state.subscriptionId = action.payload;
        },
        cancelSubscriptionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // clear Error
        clearError: (state) => {
            state.error = null;
        },

        // clear message
        clearMessage: (state) => {
            state.message = null;
        }
    }
);