// Authentication.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Authentication = ({ onLogin }) => {
  const history = useHistory();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    // For simplicity, check hardcoded values
    if (userId === 'admin' && password === 'password') {
      onLogin(); // Notify the parent component about successful login
      history.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>User ID: </label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
