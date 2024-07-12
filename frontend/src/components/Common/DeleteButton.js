import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

class DeleteButton extends React.Component {
  state = {
    deleteConfirmOpen: false,
  }

  openConfirm = () => {
    this.setState({
      deleteConfirmOpen: true
    });
  }

  onOkConfirm = () => {
    this.props.deleteObject(this.props.index);
    this.setState({
      deleteConfirmOpen: false
    });
  }

  onCancelConfirm = () => {
    this.setState({
      deleteConfirmOpen: false
    });
  }

  render() {
    const { objectName } = this.props;
    const { deleteConfirmOpen } = this.state;

    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={this.openConfirm}
        >
          Delete
        </Button>
        <Dialog
          open={deleteConfirmOpen}
          onClose={this.onCancelConfirm}
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {objectName}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancelConfirm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onOkConfirm} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  static propTypes = {
    index: PropTypes.string.isRequired,
    objectName: PropTypes.string.isRequired,
    deleteObject: PropTypes.func.isRequired,
  }
}

export default DeleteButton;