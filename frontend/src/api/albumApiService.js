import { API_URL } from './config';

const getAlbums = async () => {
  const response = await fetch(`${API_URL}/albums`, {
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

const getAlbum = async (albumId) => {
  const response = await fetch(`${API_URL}/albums/${albumId}`, {
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

const createAlbum = async (album) => {
  const response = await fetch(`${API_URL}/albums`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(album),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

const updateAlbum = async (album) => {
  const response = await fetch(`${API_URL}/albums/${album.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(album),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

const deleteAlbum = async (albumId) => {
  const response = await fetch(`${API_URL}/albums/${albumId}`, {
    method: 'DELETE',
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

export { getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum };