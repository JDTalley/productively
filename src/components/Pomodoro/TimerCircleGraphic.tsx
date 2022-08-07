import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export interface Props {
    startTime: number,
    timeRemaining: number
}

const TimerCircleGraphic: React.FC<Props> = (props) => {
    const progress = ((props.startTime * 60 - props.timeRemaining) / (props.startTime * 60)) * 100

    console.log(progress);

    return (
        <CircularProgress sx={{margin: '2rem',}} size='5rem' variant="determinate" value={progress} />
    )
};

export default TimerCircleGraphic;