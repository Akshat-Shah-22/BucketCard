import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard/VideoCard';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddCard from './AddCard/AddCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuckets } from '../../Actions/Bucket';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CardContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bucketId, setBucketId] = useState();
  const [bucketName, setBucketName] = useState();

  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.getAllBuckets);
  useEffect(() => {
    dispatch(getAllBuckets());
  }, [])
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 d-flex justify-content-start">
            <Button onClick={handleOpen} variant='contained' className='my-3'>
              Add a Card
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  Add a Video
                </Typography>
                <AddCard setOpen={setOpen} />
              </Box>
            </Modal>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Bucket</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="bucketId"
                id="demo-simple-select"
                label="Bucket"
                value={bucketName}
                onChange={(e) => {setBucketName(e.target.value);}}
              >
                {
                  buckets && buckets.map((bucket, i) => {
                    return <MenuItem value={bucket.id} onClick={()=>{setBucketId(bucket.id)}}>{bucket.name}</MenuItem>
                  })
                }

              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <VideoCard bucketId={bucketId} />
        </div>
      </div>
    </>
  )
}

export default CardContainer