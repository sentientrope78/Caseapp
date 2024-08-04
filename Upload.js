import React, { useState, useRef } from 'react';
import './Upload.css';
import $ from 'jquery';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { useNavigate } from 'react-router-dom';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Upload() {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [viewPdf, setViewPdf] = useState(null);
  const [serverResponse, setServerResponse] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const fileType = ['application/pdf'];

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError('');
          extractTextFromPDF(selectedFile);
        };
        setUploadedFileName(selectedFile.name);
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

  const handleRemoveFile = () => {
    setUploadedFileName(null);
    setPdfFile(null);
    setViewPdf(null);
    setPdfFileError('');
    if (inputRef.current) {
      inputRef.current.value = null;
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

      if (data.message === 'Text received successfully') {
        analyzeText();
      }
    } catch (error) {
      console.error('Error sending text to server:', error);
      setServerResponse('Failed to send text to server');
    }
  };

  const analyzeText = async () => {
    setLoading(true);
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
    } catch (error) {
      console.error('Error analyzing text:', error);
      setAnalysis('Failed to analyze text');
    }
    setLoading(false);
  };

  const handleCheckAnalysis = () => {
    navigate('/analyze');
  };

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = '/results';
  };

  const handleFade = (event) => {
    $('.showResults').fadeIn(3000);
  };

  return (
    <div className="Upload">
      <h1>Logged In</h1>
      <br />
      <h1>Upload Your File Below</h1>

      <div className="container">
        <br />
        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <div className="m-3">
            <label className="mx-3">Choose file: </label>
            <input ref={inputRef} onChange={handlePdfFileChange} className="d-none" type="file" />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className={`btn btn-outline-${uploadedFileName ? 'success' : 'primary'}`}
            >
              {uploadedFileName ? uploadedFileName : 'Upload'}
            </button>
            {uploadedFileName && (
              <button
                type="button"
                onClick={handleRemoveFile}
                className="btn btn-outline-danger mx-2"
              >
                Remove File
              </button>
            )}
          </div>
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br />
          <button type="submit" id="uploadFile" onClick={handleFade}>
            Preview
          </button>
          <button type="button" id="unpreviewFile" onClick={handleUnpreview} style={{ marginLeft: '10px' }}>
            Unpreview
          </button>
        </form>
        <br />
        <h4>View PDF</h4>
        <div className="pdf-container">
          {viewPdf && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          )}

          {!viewPdf && <>No PDF file selected</>}
        </div>
        <br />
        <h4>Server Response:</h4>
        <div className="server-response">
          <p>{serverResponse}</p>
        </div>
        <br />
        <h4>Analysis:</h4>
        <div className="analysis">
          <p>{loading ? 'Analyzing...' : analysis}</p>
        </div>
      </div>

      <br /> <br /> <br />
      <div className="showResults">
        <button id="Cancel">Cancel</button>
        <button id="Continue" onClick={handleClick}>Continue</button>
        <button id="CheckAnalysis" onClick={handleCheckAnalysis} style={{ marginLeft: '10px' }}>
          Check Analysis
        </button>
      </div>
    </div>
  );
}

export default Upload;

