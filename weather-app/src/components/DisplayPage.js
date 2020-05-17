import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItem: 'center',
    '& > *': {
      margin: theme.spacing(6),
      width: theme.spacing(45),
      height: theme.spacing(45),
    },
  },
}));

export default function DisplayPaper(){
    const displayer = useStyles();

    return(
        <div className={displayer.root}>
            <Paper elevation={3}>
                Graph display here
            </Paper>

        </div>

    );
}

