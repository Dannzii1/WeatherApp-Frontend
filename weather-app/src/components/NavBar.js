import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(5),
    },
    title: {
      flexGrow: 1,
    },
  }));


export default function NavBar() {
const NavBar = useStyles();

    return(
        <div className= {NavBar.root}>
            <AppBar position="static" style={{ background: '#9c27b0' }}>
                <Toolbar variant='dense'>
                <IconButton edge="start"  className={NavBar.menuButton}  color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    My Weather App
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

