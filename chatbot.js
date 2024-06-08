// src/components/chatbot.js

import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css';
import logo from './logo.png'


export default function Chatbot() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const HTTP = "http://localhost:8002/chat";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTyping(true);
    setIsAnswered(false)
    console.log(isTyping);
    console.log(isAnswered);
    axios
      .post(HTTP, { prompt })
      .then((res) => {
        setResponse(res.data);
        setIsTyping(false);
        setIsAnswered(true)
        console.log(isTyping);
        console.log(isAnswered);
        console.log(prompt);
        console.log(res.data);
      })
      .catch((error) => {
        setIsTyping(false);
        console.log(error);
      });

    setPrompt("");
  };

  const [open,setOpen] = useState(false)
    const botStyle = {
      display: open ? "block" : "none",
      opacity: open ? "1" : "0",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "300px",
      height: "300px",
      backgroundColor: "#ffe4e1",
      border: "2px solid #ff69b4",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      overflow: "auto"
  };
  const myStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: open ? "300px" : "100px",
    height: open ? "300px" : "100px",
    backgroundColor: "#ffe4e1",
    border: "2px solid #ff69b4",
    borderRadius: open ? "10px" : "50%",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden"
};
    const iconStyle = {
      display: open ? "none" : "block",
      opacity: open ? "0" : "1",
      cursor: "pointer",
      margin: "auto"
    }

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    
    <div className="chatbot-container" style={myStyle}>
      <img src={logo} style={iconStyle} onClick={()=>{setOpen(true)}} className='logo'></img>
      <div className="chatbot" style={botStyle}>
        <button className='closeBot' onClick={()=>{setOpen(false)}}>&#x2718;</button>
        <h1 className="chatbot-header">Treatify Bot</h1>
        <div className="form-group">
        <p><strong>Bot: </strong>Hi, and welcome to Treatify! My name is NiggerRapist.</p>
        <form className="form" onSubmit={handleSubmit}>
            <input
              id="prompt"
              type="text"
              placeholder="How can I help?"
              value={prompt}
              onChange={handlePrompt}
            />
          <button className="submitButton" type="submit"><i className="fa fa-search"></i></button> <br></br>
        </form>
        </div> <br></br>
        <div className="response-container">
          <p className="text-light">
            {isAnswered ? response : isTyping && <p>Bot is typing...</p>}
          </p>
        </div>
      </div>
    </div>

  );
};
