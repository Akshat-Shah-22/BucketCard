import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBuckets } from './Actions/Bucket';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BucketContainer from './components/BucketContainer/BucketContainer';
import HistoryContainer from './components/HistoryContainer/HistoryContainer';

function App() {
  
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<CardContainer />} />
      <Route path="/buckets" element={<BucketContainer />} />
      <Route path="/history" element={<HistoryContainer />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
