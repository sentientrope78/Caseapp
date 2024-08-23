import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [sessionId] = useState(uuidv4()); // Generate a unique session ID

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:8002/chat', {
        sessionId, // Include the session ID
        prompt: "Dynamically store the previous conversations to help the user navigate",
      });

      setResponse(res.data);
    } catch (error) {
      console.error('Error sending message to backend:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatComponent;

