import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { editBucket } from '../../Actions/Bucket';
import { useDispatch } from 'react-redux';

const EditBucket = ({bid, name, setOpen}) => {

    const [val, setVal] = useState({
        bname: name,
        errors: {
            bname: '',
        }
    })

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = val.errors;

        switch (name) {
            case 'bname':
                errors.bname =
                    value.length === 0
                        ? 'Bucket name is required!'
                        : '';
                break;
            default:
                break;
        }

        setVal({ ...val, errors, [name]: value });
    }
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editBucket(bid, val.bname));
        setOpen(false);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="row my-5">
                    <div className="col-md-12">
                        <TextField
                            fullWidth
                            required
                            label="Bucket Name"
                            name='bname'
                            id="fullWidth"
                            helperText={val.errors.bname}
                            value={val.bname}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-12">
                        <Button type="submit" variant="contained" fullWidth endIcon={<SendIcon />}>
                            Edit Bucket
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditBucket