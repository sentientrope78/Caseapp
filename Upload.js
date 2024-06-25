import React, { useState } from 'react';
import './Upload.css';
import $ from 'jquery';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Upload() {
  const handleClick = (event) => {
    console.log('Continue button clicked');
  };

  const handleFade = (event) => {
    $(".showResults").fadeIn(3000);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [viewPdf, setViewPdf] = useState(null);
  const [serverResponse, setServerResponse] = useState('');

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
          extractTextFromPDF(selectedFile);
        };
      } else {
        setPdfFile(null);
        setPdfFileError('Please select a valid PDF file');
      }
    } else {
      console.log('Select your file');
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const handleUnpreview = () => {
    setViewPdf(null);
  };

  const extractTextFromPDF = async (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result);

      const pdf = await pdfjsLib.getDocument(typedarray).promise;
      let extractedText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const textItems = textContent.items.map((item) => item.str);
        extractedText += textItems.join(' ');
      }

      sendTextToServer(extractedText);
    };
    reader.readAsArrayBuffer(file);
  };

  const sendTextToServer = async (text) => {
    try {
      const response = await fetch('http://localhost:4007/api/upload-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setServerResponse(data.message || 'Text sent successfully');
    } catch (error) {
      console.error('Error sending text to server:', error);
      setServerResponse('Failed to send text to server');
    }
  };

  return (
    <div className="Upload">
      <h1>Logged In</h1>
      <br />
      <h1>Upload Your File Below</h1>
      <button id='uploadFile' onClick={handleFade}>Send for analysis</button>

      <div className='container'>
        <br />
        <form className='form-group' onSubmit={handlePdfFileSubmit}>
          <input type="file" className='form-control'
            required onChange={(e) => { handlePdfFileChange(e); handlePdfFileSubmit(e); }}
          />
          {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
          <br />
          <button type="submit" id='uploadFile' onClick={handleFade}>
            Preview
          </button>
          <button type="button" id='unpreviewFile' onClick={handleUnpreview} style={{ marginLeft: '10px' }}>
            Unpreview
          </button>
        </form>
        <br />
        <h4>View PDF</h4>
        <div className='pdf-container'>
          {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}
              plugins={[defaultLayoutPluginInstance]} />
          </Worker></>}

          {!viewPdf && <>No PDF file selected</>}
        </div>
        <br />
        <h4>Server Response:</h4>
        <div className='server-response'>
          <p>{serverResponse}</p>
        </div>
      </div>

      <br /> <br /> <br />
      <div className='showResults'>
        <button id='Cancel'>Cancel</button>
        <button id='Continue' onClick={handleClick}>Continue</button>
      </div>
    </div>
  );
}

export default Upload;

