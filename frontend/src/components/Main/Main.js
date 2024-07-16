import React, { Component } from 'react';
import { AlbumList } from '../Album';
import { Photo, PhotoForm, PhotoList } from '../Photo';
import { Login, Logout } from '../Login';
// GET EXAMPLE PHOTOS AND ALBUMS
import * as api from '../../api';

class Main extends Component {
  state = {
    albums: {},
    photos: {}
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const albums = await api.getAlbums();
    const photos = await api.getPhotos();
    this.setState({ albums, photos });
  }

  createAlbum = (album) => {
    let albums = { ...this.state.albums };
    const timestamp = Date.now();
    albums[`album-${timestamp}`] = album;
    this.setState({
      albums
    });
  }

  editAlbum = (key, updatedAlbum) => {
    let albums = { ...this.state.albums };
    albums[key] = updatedAlbum;
    this.setState({
      albums
    });
  }

  deleteAlbum = (key) => {
    let albums = { ...this.state.albums };
    delete albums[key];
    this.setState({
      albums
    });
  }

  createPhoto = (photo) => {
    let photos = { ...this.state.photos };
    const timestamp = Date.now();
    photos[`photo-${timestamp}`] = photo;
    this.setState({
      photos
    });
  }

  editPhoto = (key, updatedPhoto) => {
    let photos = { ...this.state.photos };
    photos[key] = updatedPhoto;
    this.setState({
      photos
    });
  }

  deletePhoto = (key) => {
    let photos = { ...this.state.photos };
    delete photos[key];
    this.setState({
      photos
    });
  }

  render() {
    const { albums, photos } = this.state;

    return (
      <>
        <Login />
        <Logout />
        <PhotoList
          photos={photos}
          deletePhoto={this.deletePhoto}
          editPhoto={this.editPhoto}
          createPhoto={this.createPhoto}
        />
        <AlbumList
          albums={albums}
          photos={photos}
          deleteAlbum={this.deleteAlbum}
          editAlbum={this.editAlbum}
          createAlbum={this.createAlbum}
        />
      </>
    );
  }
}

export default Main;