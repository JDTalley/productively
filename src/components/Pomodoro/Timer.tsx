import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';

export interface Props {
    isActive: boolean,
    timeRemaining: number,
    onTick: Function
}

const Timer: React.FC<Props> = (props) => {
    useEffect(() => {
        if (props.isActive) {
            const interval = setInterval(() => {
                props.onTick();
            }, 1000);
    
            return () => {
                clearInterval(interval);
            }
        }
    })

    // Function takes a number and adds padding to match format 00:00
    const padNumber = (number: number) => {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    // Get minutes and seconds
    const minutes: number = Math.floor((props.timeRemaining / 60));;
    const seconds: number = props.timeRemaining - Math.floor((props.timeRemaining / 60)) * 60;

    // Convert mins and secs to friendly format
    const timerText = `${padNumber(minutes)}:${padNumber(seconds)}`;

    return (
        <Typography sx={{textAlign: 'center', fontSize: '2rem',}}>
            {timerText}
        </Typography>
    )
}

export default Timer;