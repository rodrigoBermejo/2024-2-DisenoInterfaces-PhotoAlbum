import React from 'react';
import PropTypes from 'prop-types';
import './StatusBar.css';

const StatusBar = (props) => {
  return (
    <div>Status Bar</div>
  );
}

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default StatusBar;