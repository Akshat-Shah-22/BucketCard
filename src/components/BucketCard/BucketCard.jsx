import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuckets } from '../../Actions/Bucket';
import EditBucket from '../EditBucket/EditBucket';
import "./BucketCard.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const BucketCard = () => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editCard = () => {
    console.log("edit");
  }

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  }

  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.getAllBuckets);
  useEffect(() => {
    dispatch(getAllBuckets());
  }, [buckets])

  const allDelete = () => {
    console.log(isChecked);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start">
          {isChecked.length !== 0 && <Button variant='contained' color="error" onClick={allDelete}>Delete Selected</Button>}
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          {isChecked.length !== 0 && <Button variant='contained' color="error" onClick={allDelete}>Delete All</Button>}
        </div>
      </div>
      {
        buckets && buckets.map((bucket, i) => (
          <>
          <div className="col-md-4">
            <div class="card mt-3 shadow bucket_card" key={i}>
              <div class="card-body">
                <div className="row">
                  <div className="col-md-10 my-1 d-flex justify-content-center align-items-center bucket_card_col1">
                    <h5 className='text-center'>
                      {bucket.name}
                    </h5>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <Button color='success' onClick={handleOpen}>
                      <EditIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <EditBucket bid={bucket.id} name={bucket.name} setOpen={setOpen} />
              </Box>
            </Modal>
          </>
        ))
      }

    </>
  )
}

export default BucketCard