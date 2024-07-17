import React from 'react';
import PropTypes from 'prop-types';
import { Photo, PhotoForm } from '../Photo';
import StatusBar from '../StatusBar';
import { DeleteButton } from '../Common';
import { Box, Typography, Button, Grid } from '@mui/material';

const PhotoList = (props) => {
  const { photos, deletePhoto, editPhoto, createPhoto } = props;

  const renderPhoto = () => {
    return (
      Object.keys(photos)
        .map(key => {
          const photo = photos[key];

          return (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Photo
                photo={photo}
                deletePhoto={deletePhoto}
                editPhoto={editPhoto}
              >
                <PhotoForm
                  formType='Edit'
                  photo={photo}
                  index={key}
                  editPhoto={editPhoto}
                />
                <DeleteButton
                  index={key}
                  objectName={photo.title}
                  deleteObject={deletePhoto}
                />
              </Photo>
            </Grid>
          );
        })
    );
  };

  return (
    <Box>
      <StatusBar title={`${Object.keys(photos).length} Photo(s) total`} newObjectFunction={props.createPhoto}>
        <PhotoForm
          formType='New'
          createPhoto={createPhoto}
        />
      </StatusBar>
      <Grid container spacing={2}>
        {renderPhoto()}
      </Grid>
    </Box>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.object.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  editPhoto: PropTypes.func.isRequired,
  createPhoto: PropTypes.func.isRequired,
};

export default PhotoList;