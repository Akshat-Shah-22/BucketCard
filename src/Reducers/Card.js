import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const addCardReducer = createReducer(initialState, {
    addCardRequest: (state) => {
        state.loading = true;
    },
    addCardSuccess: (state, action) => {
        state.loading = false;
        state.card = action.payload;
    },
    addCardFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const editCardReducer = createReducer(initialState, {
    editCardRequest: (state) => {
        state.loading = true;
    },
    editCardSuccess: (state, action) => {
        state.loading = false;
        state.card = action.payload;
    },
    editCardFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const deleteCardReducer = createReducer(initialState, {
    deleteCardRequest: (state) => {
        state.loading = true;
    },
    deleteCardSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteCardFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const deleteAllCardsReducer = createReducer(initialState, {
    deleteAllCardsRequest: (state) => {
        state.loading = true;
    },
    deleteAllCardsSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteAllCardsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getAllCardsReducer = createReducer(initialState, {
    getAllCardsRequest: (state) => {
        state.loading = true;
    },
    getAllCardsSuccess: (state, action) => {
        state.loading = false;
        state.cards = action.payload;
    },
    getAllCardsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getCardByBucketIdReducer = createReducer(initialState, {
    getCardByBucketIdRequest: (state) => {
        state.loading = true;
    },
    getCardByBucketIdSuccess: (state, action) => {
        state.loading = false;
        state.cards = action.payload;
    },
    getCardByBucketIdFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})