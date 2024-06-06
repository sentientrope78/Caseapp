import React, { useState } from "react";
import axios from "axios";
import './Chatbot.css';  // Import the CSS file for styling

export default function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8002/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(HTTP, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="prompt">Ask questions</label>
            <input
              id="prompt"
              className="shadow-sm"
              type="text"
              placeholder="Enter text"
              value={prompt}
              onChange={handlePrompt}
            />
          </div>
          <button className="btn btn-accept w-100" type="submit">
            Go
          </button>
        </form>
        <div className="response-container bg-darkGreen mt-2 p-1 border-5">
          <p className="text-light">
            {response ? response : "Ask me anything..."}
          </p>
        </div>
      </div>
    </div>
  );
}
