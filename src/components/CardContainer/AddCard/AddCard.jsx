import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuckets } from '../../../Actions/Bucket';
import { addCard } from '../../../Actions/Card';

const AddCard = ({setOpen}) => {

    const [val, setVal] = useState({
        videoTitle: null,
        videoLink: null,
        bid: null,
          errors: {
            videoTitle: '',
            videoLink: '',
            bid: '',
          }
      })

      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = val.errors;
    
        switch (name) {
          case 'videoTitle': 
            errors.videoTitle = 
              value.length === 0
                ? 'video title is required!'
                : '';
            break;
          case 'videoLink': 
            errors.videoLink = 
              value.length === 0
                ? 'videoLink is required!'
                : '';
            break;
            case 'bid': 
            errors.bid = 
              value.length === 0
                ? 'Bucket is required!'
                : '';
            break;
          default:
            break;
        }
    
        setVal({...val, errors, [name]: value});
      }

      const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.getAllBuckets);
  useEffect(() => {
    dispatch(getAllBuckets());
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    let card = {
      bucketId: val.bid,
      title: val.videoTitle,
      link: val.videoLink,
      isChecked: false
    }
    dispatch(addCard(card.bucketId, card.title, card.link, card.isChecked));
    setOpen(false);
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
                        name='videoTitle'
                        id="fullWidth"
                        helperText={val.errors.videoTitle}
                        value={val.videoTitle}
                onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row mb-5 my-3">
                <div className="col-md-12">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Video Link"
                        name='videoLink'
                        helperText={val.errors.videoLink}
                        required
                        type={"url"}
                        fullWidth
                        value={val.videoLink}
                onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-12">
                    <Button type="submit" variant="contained" fullWidth endIcon={<SendIcon />}>
                        Add Video
                    </Button>
                </div>
            </div>
            </form>
        </>
    )
}

export default AddCard