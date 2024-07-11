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

  componentWillMount() {
    // If there is no data in local storage, get data from api
    const localAlbums = localStorage.getItem('albums');
    const localPhotos = localStorage.getItem('photos');

    if (localAlbums && localPhotos) {
      this.setState({
        albums: JSON.parse(localAlbums),
        photos: JSON.parse(localPhotos)
      });
    } else {
      this.setState({
        albums: api.getAlbums(),
        photos: api.getPhotos(),
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      'albums', JSON.stringify(nextState.albums)
    );

    localStorage.setItem(
      'photos', JSON.stringify(nextState.photos)
    );
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

      </>
    );
  }
}

export default Main;