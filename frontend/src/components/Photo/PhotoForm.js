import React from 'react';
import PropTypes from 'prop-types';

class PhotoForm extends React.Component {
  state = {
    error: false,
    modalOpen: false,
    photo: {
      title: '',
      description: '',
      url: '',
    }
  }

  handleInputChange = (name, value) => {
    const { photo } = this.state;
    const updatedPhoto = {
      ...photo,
      [name]: value
    }

    this.setState({
      photo: updatedPhoto
    });
  }

  isFormValid = () => {
    const { photo } = this.state;

    if (!photo) return false;
    else if (!photo.title) return false;
    else if (!photo.description) return false;
    else if (!photo.url) return false;

    return true;
  }

  handleSubmit = (event) => {
    if (!this.isFormValid()) {
      this.setState({ error: true });
      return;
    }

    this.setState({ error: false });

    const { editPhoto, createPhoto, index } = this.props;
    const { photo } = this.state;

    if (this.isNewForm()) {
      createPhoto(photo);
    } else {
      editPhoto(index, photo);
    }

    this.closeForm();
  }

  showForm = () => {
    const { photo } = this.props;
    this.setState({
      modalOpen: true,
      photo,
    });
  }

  closeForm = () => this.setState({ modalOpen: false });
  isNewForm = () => this.props.formType === 'New';

  render() {
    const { modalOpen, photo, error } = this.state;
    return (
      <div>Photo Form</div>
    );
  }

  static propTypes = {
    formType: PropTypes.oneOf(['New', 'Edit']).isRequired,
    index: PropTypes.string,
    editPhoto: PropTypes.func,
    createPhoto: PropTypes.func,
  }
}

export default PhotoForm;
