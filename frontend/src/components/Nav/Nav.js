import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Avatar, Menu, MenuItem, ListItemIcon, IconButton, Typography, Tooltip } from "@mui/material";
import { Home, AccountCircle, Logout } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMenuSelected = (selectedItem) => {
    //navigate(`/${selectedItem.toLowerCase()}`);
  };

  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleCloseAvatar = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", width: "100%" }}>
          <IconButton onClick={() => handleMenuSelected('Home')} color="inherit">
            <Home />
          </IconButton>
          <Typography
            sx={{ minWidth: 100, cursor: 'pointer' }}
            onClick={() => handleMenuSelected('Albums')}
          >
            Albums
          </Typography>
          <Typography
            sx={{ minWidth: 100, cursor: 'pointer' }}
            onClick={() => handleMenuSelected('Photos')}
          >
            Photos
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClickAvatar}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleCloseAvatar}
          onClick={handleCloseAvatar}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => handleMenuSelected('Profile')}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={() => handleMenuSelected('Logout')}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;