import React from 'react';
import './Upload.css';

function Upload() {
  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = "/results"
  }
  return (
    <div className="Upload">
        <h1>Logged In</h1>
        <br></br>
        <h1>Upload Your File Below, you black monkey</h1>
        <button onClick={handleClick}>Upload</button>
    </div>
  );
}

export default Upload;
