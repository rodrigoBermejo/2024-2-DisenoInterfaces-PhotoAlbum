import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

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

  handleInputChange = (event) => {
    const { name, value } = event.target;
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
    event.preventDefault();
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
    const { formType } = this.props;

    return (
      <Dialog open={modalOpen} onClose={this.closeForm}>
        <DialogTitle>{formType === 'New' ? 'Add New Photo' : 'Edit Photo'}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={this.handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={photo.title}
              onChange={this.handleInputChange}
              error={error && !photo.title}
              helperText={error && !photo.title ? 'Title is required' : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              value={photo.description}
              onChange={this.handleInputChange}
              error={error && !photo.description}
              helperText={error && !photo.description ? 'Description is required' : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="url"
              label="URL"
              name="url"
              value={photo.url}
              onChange={this.handleInputChange}
              error={error && !photo.url}
              helperText={error && !photo.url ? 'URL is required' : ''}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeForm} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            {formType === 'New' ? 'Add' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  static propTypes = {
    formType: PropTypes.oneOf(['New', 'Edit']).isRequired,
    index: PropTypes.string,
    editPhoto: PropTypes.func,
    createPhoto: PropTypes.func,
    photo: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    }),
  }
}

export default PhotoForm;