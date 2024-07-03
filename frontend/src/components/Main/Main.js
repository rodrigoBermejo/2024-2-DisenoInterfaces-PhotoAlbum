import React, { Component } from 'react';
import { AlbumList } from '../Album';
import { PhotoList } from '../Photo';
import Login from '../Login';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
  state = {
    albums: {},
    photos: {}
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {

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

    const albumList = () => <AlbumList
      albums={albums}
      photos={photos}
      deleteAlbum={this.deleteAlbum}
      editAlbum={this.editAlbum}
      createAlbum={this.createAlbum}
    />;

    const photoList = () => <PhotoList
      photos={photos}
      deletePhoto={this.deletePhoto}
      editPhoto={this.editPhoto}
      createPhoto={this.createPhoto}
    />;

    const error = () => <div>Error</div>;
    //const error = () => <Message
    //                icon="warning circle"
    //                header="Ups... Error!"
    //                content="Please go back and try again."
    //              />;

    return (
      <Routes>
        <Route exact path="/" component={albumList} />
        <Route path="/albums" render={albumList} />
        <Route path="/photos" render={photoList} />
        <Route path="/login" render={Login} />
        <Route render={error} />
      </Routes>
    );
  }
}

export default Main;