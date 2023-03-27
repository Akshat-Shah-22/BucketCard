import {configureStore} from '@reduxjs/toolkit';
import { addBucketReducer, editBucketReducer, getAllBucketsReducer } from './Reducers/Bucket';
import { addCardReducer, deleteAllCardsReducer, deleteCardReducer, getAllCardsReducer, getCardByBucketIdReducer } from './Reducers/Card';
import { createHistoryReducer, getHistoryReducer } from './Reducers/History';

const store = configureStore({
    reducer: {
        addCard: addCardReducer,
        getAllCards: getAllCardsReducer,
        getCardByBucketId: getCardByBucketIdReducer,
        deleteCard: deleteCardReducer,
        deleteAllCards: deleteAllCardsReducer,
        addBucket: addBucketReducer,
        editBucket: editBucketReducer,
        getAllBuckets: getAllBucketsReducer,
        createHistory: createHistoryReducer,
        getHistory: getHistoryReducer
    },
});

export default store;