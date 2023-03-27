import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuckets } from '../../Actions/Bucket';
import AddBucket from '../AddBucket/AddBucket';
import BucketCard from '../BucketCard/BucketCard';

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

const BucketContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.getAllBuckets);
  useEffect(() => {
    dispatch(getAllBuckets());
  }, [])
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <Button onClick={handleOpen} variant='contained' className='my-3'>
              Add a Bucket
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  Add a Bucket
                </Typography>
                <AddBucket setOpen={setOpen}/>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="row">
          <BucketCard />
        </div>
      </div>
    </>
  )
}

export default BucketContainer