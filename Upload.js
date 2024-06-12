import React, { useState } from 'react';
import './Upload.css';
import $ from 'jquery';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Upload() {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "/results";
  };

  const handleFade = (event) => {
    $(".showResults").fadeIn(3000);
  };

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [pdfAnalysis, setPdfAnalysis] = useState(null);

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onchange event
  const fileType = ['application/pdf'];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError('');
        };
      } else {
        setPdfFile(null);
        setPdfFileError('Please select a valid PDF file');
      }
    } else {
      console.log('Select your file');
    }
  };

  const sendPdfToBackend = async () => {
    try {
      const base64Pdf = pdfFile.split(',')[1]; // Remove the "data:application/pdf;base64," part
      const response = await fetch('http://localhost:4006/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdf: base64Pdf }),
      });

      const result = await response.json();
      setPdfAnalysis(result.analysis);
      console.log(result);
    } catch (error) {
      console.error('Error sending PDF to backend:', error);
    }
  };

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="Upload">
      <h1>Logged In</h1>
      <br />
      <h1>Upload Your File Below</h1>

      <div className='container'>
        <br />

        <form className='form-group' onSubmit={handlePdfFileSubmit}>
          <input type="file" className='form-control' required onChange={handlePdfFileChange} />
          {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
          <br />
          <button type="submit" id='uploadFile' onClick={handleFade}>
            UPLOAD
          </button>
        </form>
        <br />
        <h4>View PDF</h4>
        <div className='pdf-container'>
          {/* show pdf conditionally (if we have one) */}
          {viewPdf && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          )}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf && <>No pdf file selected</>}
        </div>

        {viewPdf && (
          <button type="button" onClick={sendPdfToBackend}>
            Analyze
          </button>
        )}

        {pdfAnalysis && (
          <div className='analysis-result'>
            <h4>Analysis Result</h4>
            <pre>{JSON.stringify(pdfAnalysis, null, 2)}</pre>
          </div>
        )}
      </div>

      <br /><br /><br />
      <div className='showResults'>
        <button id='Cancel'>Cancel?</button>
        <button id='Continue' onClick={handleClick}>Continue?</button>
      </div>
    </div>
  );
}

export default Upload;
