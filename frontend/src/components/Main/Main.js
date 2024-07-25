import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AlbumList } from '../Album';
import { PhotoList } from '../Photo';
import { Login, Logout } from '../Login';
import * as api from '../../api';

const Main = () => {
  const [state, setState] = useState({
    albums: {},
    photos: {},
    isLoggedIn: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [state.isLoggedIn]);

  const fetchData = async () => {
    const albums = await api.sampleAlbums;
    const photos = await api.samplePhotos;
    setState(prevState => ({ ...prevState, albums, photos }));
  };

  const createAlbum = (album) => {
    const timestamp = Date.now();
    setState(prevState => ({
      ...prevState,
      albums: { ...prevState.albums, [`album-${timestamp}`]: album }
    }));
  };

  const editAlbum = (key, updatedAlbum) => {
    setState(prevState => ({
      ...prevState,
      albums: { ...prevState.albums, [key]: updatedAlbum }
    }));
  };

  const deleteAlbum = (key) => {
    const { [key]: _, ...remainingAlbums } = state.albums;
    setState(prevState => ({
      ...prevState,
      albums: remainingAlbums
    }));
  };

  const createPhoto = (photo) => {
    const timestamp = Date.now();
    setState(prevState => ({
      ...prevState,
      photos: { ...prevState.photos, [`photo-${timestamp}`]: photo }
    }));
  };

  const editPhoto = (key, updatedPhoto) => {
    setState(prevState => ({
      ...prevState,
      photos: { ...prevState.photos, [key]: updatedPhoto }
    }));
  };

  const deletePhoto = (key) => {
    const { [key]: _, ...remainingPhotos } = state.photos;
    setState(prevState => ({
      ...prevState,
      photos: remainingPhotos
    }));
  };

  const { albums, photos, isLoggedIn } = state;
  const albumListComponent = <AlbumList
    albums={albums}
    photos={photos}
    deleteAlbum={deleteAlbum}
    editAlbum={editAlbum}
    createAlbum={createAlbum} />;
  const photoListComponent = <PhotoList
    photos={photos}
    deletePhoto={deletePhoto}
    editPhoto={editPhoto}
    createPhoto={createPhoto} />;

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? albumListComponent : <Navigate to="/login" />} />
      <Route path="/photos" element={isLoggedIn ? photoListComponent : <Navigate to="/login" />} />
      <Route path="/albums" element={isLoggedIn ? albumListComponent : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Main;