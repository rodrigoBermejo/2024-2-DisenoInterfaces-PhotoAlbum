import { API_URL } from './config';

const login = async (loginRequest) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginRequest),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Invalid username or password');
  }
  return data;
};

const getProfile = async () => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export default {
  login,
  getProfile,
};