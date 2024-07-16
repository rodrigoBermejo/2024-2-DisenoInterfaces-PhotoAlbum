import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';

const Login = (props) => {
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    debugger;
    if (!validateEmail(username)) {
      setInvalidLogin(true);
      setErrorMessage('Invalid email format');
      return;
    }

    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": username, "passwordHash": password }),
    });

    try {
      const data = await response.json();
      if (response.ok) {
        setInvalidLogin(false);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('token', data.token);
      } else {
        setInvalidLogin(true);
        setErrorMessage('Invalid username or password');
        localStorage.setItem('loggedIn', false);
      }
    } catch (error) {
      setInvalidLogin(true);
      setErrorMessage('An error occurred during login');
      localStorage.setItem('loggedIn', false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      {invalidLogin && (
        <Alert id='alertError' severity="error">
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default Login;