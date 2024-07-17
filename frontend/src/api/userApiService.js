const API_URL = 'http://localhost:8080/api/users';

const login = async (loginRequest) => {
  const response = await fetch(`${API_URL}/login`, {
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

export default {
  login,
};