import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../../Actions/History';
import "./HistoryContainer.css";

const HistoryContainer = () => {
  const dispatch = useDispatch();
  const { histories } = useSelector((state) => state.getHistory);

  function timeStampToDate(timestamp) {
    if (!timestamp) {
      return;
    }
    let date = new Date(timestamp);
    return date.toUTCString();
  }

  useEffect(() => {
    dispatch(getHistory());
  }, [])

  return (
    <>
    <div className="container">
      <h2 className='text-center my-3'>HISTORY</h2>
    <div className="row">
      {
        histories && histories.map((h, i) => {
          return (
            <>
              
                <div className="col-md-4">
                  <div class="card mt-3 shadow history_card" key={i}>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-12 my-1 d-flex justify-content-center align-items-center history_card_col1">
                          <h4 className='text-center'>
                            {h.title}
                          </h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 my-2 d-flex justify-content-center align-items-center history_card_col2">
                          {h.url}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 my-3 d-flex justify-content-center align-items-center text-muted history_card_col3">
                          {timeStampToDate(h.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            </>
          )

        })
      }
      </div>
      </div>
    </>
  )
}

export default HistoryContainer