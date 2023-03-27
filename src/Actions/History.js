import axios from "axios";

export const getHistory = () => async (dispatch) => {
    try {
        dispatch({
            type: "getHistoryRequest",
        });

        const {
            data
        } = await axios.get(
            "http://localhost:3000/history"
        )

        dispatch({
            type: "getHistorySuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "getHistoryFailure",
            payload: error.response.data.message,
        });
    }
}

export const createHistory = (url, title, timestamp) => async (dispatch) => {
    try {
        dispatch({
            type: "createHistoryRequest",
        });

        const {
            data
        } = await axios.post(
            "http://localhost:3000/history", {
                url, title, timestamp
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "createHistorySuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "createHistoryFailure",
            payload: error.response.data.message,
        });
    }
}

