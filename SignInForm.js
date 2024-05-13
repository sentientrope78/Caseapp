import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/credentials.json'); // Fetch credentials from the public folder
      const credentials = await response.json();

      if (username === credentials.username && password === credentials.password) {
        navigate('/homepage/Dashboard.js'); // Navigate to the dashboard on successful login
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Failed to validate credentials');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input 
        type="text" 
        name="username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required 
      />
      <input 
        type="password" 
        name="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default SignInForm;
