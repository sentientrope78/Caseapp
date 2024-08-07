import React, { useEffect, useState } from 'react';
import './Results.css';
import Popup from './Loading.js';
import axios from 'axios';

function Results() {
  const [analysis, setAnalysis] = useState('');
  const [text, setText] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const analyzeText = async () => {
    setIsPopupOpen(true);
    try {
      const response = await fetch('http://localhost:8008/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      setAnalysis(data.analysis || 'No analysis available');
      console.log(data.analysis);
      
    } catch (error) {
      console.error('Error analyzing text:', error);
      setAnalysis('Failed to analyze text');
    }
    setIsPopupOpen(false);
  };

  useEffect(() => {
    receiveText()
    analyzeText()
  }, [])

  const receiveText = async() => {
    const response = await axios.get('http://localhost:4007/view-text');
    const extractedText = response.data;
    setText(extractedText);
    console.log(text);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  

  return (
    <div className="Results">
      {isPopupOpen && <Popup />}
        <div class="row">
            <div className="column Analysis">
                <h1>Analysis:</h1>
                <p>{text}</p>
                <br></br> <br></br>
            </div>
            <div className="column Recommendations">
                <h1>Recommendations:</h1>
                <br></br> <br></br>
                <p>{analysis}</p>
            </div>
        </div>
    </div>
  );
}

export default Results;
