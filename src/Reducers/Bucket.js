import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const addBucketReducer = createReducer(initialState, {
    addBucketRequest: (state) => {
        state.loading = true;
    },
    addBucketSuccess: (state, action) => {
        state.loading = false;
        state.bucket = action.payload;
    },
    addBucketFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const editBucketReducer = createReducer(initialState, {
    editBucketRequest: (state) => {
        state.loading = true;
    },
    editBucketSuccess: (state, action) => {
        state.loading = false;
        state.bucket = action.payload;
    },
    editBucketFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getAllBucketsReducer = createReducer(initialState, {
    getAllBucketsRequest: (state) => {
        state.loading = true;
    },
    getAllBucketsSuccess: (state, action) => {
        state.loading = false;
        state.buckets = action.payload;
    },
    getAllBucketsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})