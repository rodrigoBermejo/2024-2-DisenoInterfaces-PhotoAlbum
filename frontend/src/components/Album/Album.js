import React from 'react';
import PropTypes from 'prop-types';
import './Album.css';

const Album = (props) => {
  const { album, albumPhotos } = props;

  const renderPreviewImages = () => {

  }

  const renderTags = () => {

  }

  return (
    <div className="album">
      <p>Album</p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
  albumPhotos: PropTypes.array.isRequired,
}

export default Album;