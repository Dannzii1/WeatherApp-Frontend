import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      flexGrow: 1,
    },
  }));


export default function NavBar() {
const NavBar = useStyles();

const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};


    return(
        <div className= {NavBar.root}>
            <AppBar position="static" style={{ background: '#9c27b0' }}>
                <Toolbar variant='dense'>
                  <IconButton edge="start"  className={NavBar.menuButton}  color="inherit" onClick={handleClick}>
                  <MenuIcon/>
                    <Menu id="simple-menue" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}onClose={handleClose}>
                      <MenuItem>
                          Current Day Forecast
                      </MenuItem>
                      <MenuItem>
                          5 Day Forecast
                      </MenuItem>
                    </Menu>
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    My Weather App
                  </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

