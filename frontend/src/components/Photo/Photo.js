import React from 'react';
import PropTypes from 'prop-types';
import { WithLightbox } from '../Common';

const Photo = (props) => {
  const { photo } = props;

  return (
    <div className='photo'>
      <WithLightbox photos={[photo]}>
        <img src={photo.url} />
      </WithLightbox>
      <div>
        <h2>
          {photo.title}
        </h2>
        <p>
          {photo.description}
        </p>
      </div>
    </div>
  );
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default Photo;