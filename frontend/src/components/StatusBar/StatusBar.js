import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const StatusBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {props.title}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={props.newObjectFunction}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
  newObjectFunction: PropTypes.any.isRequired
}

export default StatusBar;