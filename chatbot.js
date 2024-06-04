// src/components/chatbot.js

import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css';
import express from 'express';
import { response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    console.log(input)
    console.log(messages);
    try {
      const response = await axios.post('http://localhost:8000/chat', { prompt: input });
      const botMessage = { role: 'bot', content: response.data };
      console.log(botMessage);
      setMessages([...messages, userMessage, botMessage]);
      console.log(messages);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    console.log(userMessage);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatbot-input"
        />
        <button onClick={sendMessage} className="chatbot-button">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
