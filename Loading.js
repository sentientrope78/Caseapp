import React from 'react';
import './Loading.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Loading analysis...</h2>
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Popup;