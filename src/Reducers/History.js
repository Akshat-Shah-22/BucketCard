import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const getHistoryReducer = createReducer(initialState, {
    getHistoryRequest: (state) => {
        state.loading = true;
    },
    getHistorySuccess: (state, action) => {
        state.loading = false;
        state.histories = action.payload;
    },
    getHistoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const createHistoryReducer = createReducer(initialState, {
    createHistoryRequest: (state) => {
        state.loading = true;
    },
    createHistorySuccess: (state, action) => {
        state.loading = false;
        state.history = action.payload;
    },
    createHistoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})