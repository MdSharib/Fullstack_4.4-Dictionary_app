import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWordDetailsThunk } from '../store/wordThunk';
import { setWordDetails } from '../store/wordDetailsSlice';
import { useNavigate } from 'react-router';



const History = () => {
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();
const navigate = useNavigate();
// const history = useHistory();
const [loading, setLoading] = useState(false); 


  const handleWordClick = (word) => {
    
    // dispatch(fetchWordDetailsThunk(word));
    
    navigate('/historyDetails', { state: { text: word } });
    // navigate('/historyDetails');
  };
  return (
    <>
    <Navbar />
    <h2>Word History</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index} onClick={() => handleWordClick(word)}>
            {word}
          </li>
        ))}
      </ul>
    </>
  )
}

export default History