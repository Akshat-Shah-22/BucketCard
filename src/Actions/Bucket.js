import axios from "axios";

export const addBucket = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "AddBucketRequest",
        });
        const {
            data
        } = await axios.post(
            "http://localhost:3000/buckets", {
                name
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "AddBucketSuccess",
            payload: data.bucket,
        });
    } catch (error) {
        dispatch({
            type: "AddBucketFailure",
            payload: error.response.data.message,
        });
    }
}

export const editBucket = (bid, bname) => async (dispatch) => {
    try {
        dispatch({
            type: "editBucketRequest",
        });
        const {
            data
        } = await axios.put(
            `http://localhost:3000/buckets/${bid}`, {
                name: bname
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "editBucketSuccess",
            payload: data.bucket,
        });
    } catch (error) {
        dispatch({
            type: "editBucketFailure",
            payload: error.response.data.message,
        });
    }
}


export const getAllBuckets = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllBucketsRequest",
        });

        const {
            data
        } = await axios.get(
            "http://localhost:3000/buckets"
        )

        dispatch({
            type: "getAllBucketsSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "getAllBucketsFailure",
            payload: error.response.data.message,
        });
    }
}

