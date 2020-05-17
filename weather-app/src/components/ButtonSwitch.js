import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';
import CloudSharpIcon from '@material-ui/icons/CloudSharp';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));




export default function Buttongroup(){
    const Buttons = useStyles();

    return(
        <div className={Buttons.root}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button startIcon={<AcUnitRoundedIcon />}>
                    Temprature
                </Button>
                <Button startIcon={<WavesRoundedIcon />}>
                    Wind Speed
                </Button>
                <Button startIcon={<CloudSharpIcon />}>
                    Cloud Forecast
                </Button>
            </ButtonGroup>
        </div>
    );
}