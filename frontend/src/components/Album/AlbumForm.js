import React from 'react';
import PropTypes from 'prop-types';

class AlbumForm extends React.Component {
  state = {
    error: false,
    modalOpen: false,
    album: {
      name: '',
      description: '',
      tags: [],
      photosIds: [],
    }
  }

  handleInputChange = (name, value) => {
    const { album } = this.state;
    const updatedAlbum = {
      ...album,
      [name]: value
    }

    this.setState({
      album: updatedAlbum
    });
  }

  isFormValid = () => {
    const { album } = this.state;

    if (!album) return false;
    else if (!album.name) return false;
    else if (!album.description) return false;
    else if (!album.tags || album.tags.length === 0) return false;
    else if (!album.photosIds || album.photosIds.length === 0) return false;

    return true;
  }

  handleSubmit = (event) => {
    if (!this.isFormValid()) {
      this.setState({ error: true });
      return;
    }

    this.setState({ error: false });

    const { updateAlbum, createAlbum, index } = this.props;
    const { album } = this.state;

    if (this.isNewForm()) {
      createAlbum(album);
    } else {
      updateAlbum(index, album);
    }

    this.closeForm();
  }

  showForm = () => {
    const { album } = this.props;
    this.setState({
      modalOpen: true,
      album,
    });
  }

  closeForm = () => this.setState({ modalOpen: false });
  isNewForm = () => this.props.formType === 'New';

  render() {
    const { modalOpen, album, error } = this.state;
    const { photos } = this.props;

    const options = Object.keys(photos)
      .map(key => {
        const photo = photos[key];
        return {
          text: photo.title,
          value: key,
          image: { avatar: true, src: photo.url }
        }
      });

    return (
      <div>
        <p>Album Form</p>
      </div>
    );
  }

  static propTypes = {
    formType: PropTypes.oneOf(['New', 'Edit']).isRequired,
    photos: PropTypes.object.isRequired,
    album: PropTypes.object,
    index: PropTypes.string,
    editAlbum: PropTypes.func,
    createAlbum: PropTypes.func,
  }
}

export default AlbumForm;
