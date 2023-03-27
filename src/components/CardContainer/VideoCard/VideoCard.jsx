import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import "./VideoCard.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard, getAllCards } from '../../../Actions/Card';
import EditCard from '../../EditCard/EditCard';
import { createHistory } from '../../../Actions/History';

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

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'transparent',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const VideoCard = ({ bucketId }) => {
  const [filteredCards, setFilteredCard] = useState([]);
  const [bucketIdState, setBucketIdState] = useState();
  const [open, setOpen] = React.useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [isChecked, setIsChecked] = React.useState([]);
  const dispatch = useDispatch();

  const handleOpen = (url, videoTitle) => {
    setVideoLink(url);
    setVideoTitle(videoTitle);
    setOpen(true);
  }
  const handleClose = () => {
    dispatch(createHistory(videoLink, videoTitle, Date.now())); 
    setOpen(false);
  }

  const [cid, setCid] = useState()
  const [bid, setBid] = useState()
  const [title, setTitle] = useState()
  const [link, setLink] = useState()

  const [openCard, setOpenCard] = React.useState(false);
  const handleOpenCard = (card) => {
    setCid(card.id);
    setBid(card.bucketId);
    setTitle(card.title);
    setLink(card.link);
    setOpenCard(true);
  }
  const handleCloseCard = (card) => { 
    setOpenCard(false); 
  }

  const handleCheck = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  }


  const { cards } = useSelector((state) => state.getAllCards);

  const deleteSelected = () => {
    isChecked.forEach((id) => {
      dispatch(deleteCard(id));
    })
  }

  const deleteAll = () => {
    filteredCards.forEach((card) => {
      dispatch(deleteCard(card.id));
    })
  }

  useEffect(() => {
    dispatch(getAllCards());
    if (cards) {
      if (bucketId) {
        let filterArray = cards.filter((card) => { return card.bucketId === bucketId });
        if (filterArray) {
          setFilteredCard(filterArray);
        }

      } else {
        setFilteredCard(cards);
      }
    }
  }, [cards, bucketId])

  // useEffect(() => {
  //   setBucketIdState(bucketId)
  // }, [bucketId])

  return (
    <>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start">
          {isChecked.length !== 0 && <Button variant='contained' color="error" onClick={deleteSelected}>Delete Selected</Button>}
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          {isChecked.length !== 0 && <Button variant='contained' color="error" onClick={deleteAll}>Delete All</Button>}
        </div>
      </div>

      {

        filteredCards && filteredCards.map((card, i) => (
          <>
            <div className="col-md-6">
              <div class="card mt-3 shadow video_card">
                <div class="card-body">
                  <div className="row">
                    <div className="col-md-2 col-sm-12 mt-3">
                      <Checkbox value={card.id} onChange={(e) => handleCheck(e)} />
                    </div>
                    <div className="col-md-8 col-sm-12 my-1 video_card_col1" onClick={() => { handleOpen(card.link, card.title); }}>
                      <h5 className='text-center'>
                        {card.title}
                      </h5>
                      <div className='d-flex justify-content-center align-items-center video_card_col1'>
                        <Button>
                          {card.link}
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-12 mt-3">
                      <Button color='success' onClick={() => { handleOpenCard(card); }}>
                        <EditIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))

      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <iframe width="880" height="480" src={videoLink}>
          </iframe>
        </Box>
      </Modal>
      <Modal
        open={openCard}
        onClose={handleCloseCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditCard cid={cid} bucketId={bid} title={title} link={link} setOpenCard={setOpenCard} />
        </Box>
      </Modal>
    </>
  )
}

export default VideoCard