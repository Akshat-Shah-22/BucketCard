import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getAllBuckets } from '../../Actions/Bucket';
import { useDispatch, useSelector } from 'react-redux';
import { editCard, getAllCards } from '../../Actions/Card';

const EditCard = ({ cid, bucketId, title, link, setOpenCard }) => {

    const [val, setVal] = useState({
        bid: bucketId,
        title: title,
        link: link,
        errors: {
            bid: '',
            title: '',
            link: '',
        }
    })

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = val.errors;

        switch (name) {
            case 'bid':
                errors.bid =
                    value.length === 0
                        ? 'Bucket name is required!'
                        : '';
                break;
            case 'title':
                errors.title =
                    value.length === 0
                        ? 'Title is required!'
                        : '';
                break;
            case 'link':
                errors.link =
                    value.length === 0
                        ? 'Link is required!'
                        : '';
                break;
            default:
                break;
        }

        setVal({ ...val, errors, [name]: value });
    }
    const dispatch = useDispatch();
    const { buckets } = useSelector((state) => state.getAllBuckets);
    const { cards, loading } = useSelector((state) => state.getAllCards);
    useEffect(() => {
        dispatch(getAllBuckets());
    }, [])
    useEffect(() => {
        dispatch(getAllCards());
    }, [cards])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editCard(cid, val.bid, val.title, val.link));
        setOpenCard(false);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <FormControl required fullWidth>
                            <InputLabel id="demo-simple-select-label" >Bucket</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="bid"
                                id="demo-simple-select"
                                label="Category"
                                helperText={val.errors.bid}
                                value={val.bid}
                                onChange={handleChange}
                                required
                            >
                                {
                                    buckets && buckets.map((bucket, i) => {
                                        return <MenuItem value={bucket.id}>{bucket.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-12">
                        <TextField
                            fullWidth
                            required
                            label="video Title"
                            name='title'
                            id="fullWidth"
                            helperText={val.errors.title}
                            value={val.title}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-5 my-3">
                    <div className="col-md-12">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Video Link"
                            name='link'
                            helperText={val.errors.link}
                            required
                            type={"url"}
                            fullWidth
                            value={val.link}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-12">
                        <Button type="submit" disabled={!loading} variant="contained" fullWidth endIcon={<SendIcon />}>
                            Edit Card 
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditCard