import axios from "axios";

export const addCard = (bucketId, title, link, isChecked) => async (dispatch) => {
    try {
        dispatch({
            type: "addCardRequest",
        });

        const {
            data
        } = await axios.post(
            "http://localhost:3000/cards", {
                bucketId, title, link, isChecked
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "addCardSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "addCardFailure",
            payload: error.response.data.message,
        });
    }
}

export const editCard = (cid, bucketId, title, link) => async (dispatch) => {
    try {
        dispatch({
            type: "editCardRequest",
        });
        const {
            data
        } = await axios.put(
            `http://localhost:3000/cards/${cid}`, {
                bucketId, title, link
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "editCardSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "editCardFailure",
            payload: error.response.data.message,
        });
    }
}

export const deleteCard = (cid) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteCardRequest",
        });
        const {
            data
        } = await axios.delete(
            `http://localhost:3000/cards/${cid}`
        )

        dispatch({
            type: "deleteCardSuccess",
            payload: "Selected card deleted successfully",
        });
    } catch (error) {
        dispatch({
            type: "deleteCardFailure",
            payload: error.response.data.message,
        });
    }
}

export const deleteAllCards = () => async (dispatch) => {
    try {
        dispatch({
            type: "deleteAllCardsRequest",
        });
        const {
            data
        } = await axios.delete(
            `http://localhost:3000/cards`
        )

        dispatch({
            type: "deleteAllCardsSuccess",
            payload: "All cards deleted successfully",
        });
    } catch (error) {
        dispatch({
            type: "deleteAllCardsFailure",
            payload: error.response.data.message,
        });
    }
}

export const getAllCards = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllCardsRequest",
        });

        const {
            data
        } = await axios.get(
            "http://localhost:3000/cards"
        )

        dispatch({
            type: "getAllCardsSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "getAllCardsFailure",
            payload: error.response.data.message,
        });
    }
}