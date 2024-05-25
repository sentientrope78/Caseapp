import React from 'react';
import './Upload.css';
import $ from 'jquery';

function Upload() {
  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = "/results"
  }
  const handleFade = (event) => {
    $(".showResults").fadeIn(3000)
  }
  return (
    <div className="Upload">
        <h1>Logged In</h1>
        <br></br>
        <h1>Upload Your File Below, you black monkey</h1>
        <button id='uploadFile' onClick={handleFade}>Upload</button>
        <br></br> <br></br> <br></br>
        <div className='showResults'>
          <button id='Cancel'>Cancel?</button>
          <button id='Continue' onClick={handleClick}>Continue?</button>
        </div>
    </div>
  );
}

export default Upload;
