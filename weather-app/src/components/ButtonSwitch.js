import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'right',
      '& > *': {
        margin: theme.spacing(10),
      },
    },
  }));




export default function Buttongroup(){
    const Buttons = useStyles();

    return(
        <div className={Buttons.root}>
            <ButtonGroup  variant="text" color="primary" aria-label="text primary button group">
                <Button>
                    Temprature
                </Button>
                <Button>
                    Wind Speed
                </Button>
                <Button>
                    Cloud Forecast
                </Button>
            </ButtonGroup>
        </div>
    );
}