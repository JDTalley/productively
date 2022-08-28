import React from 'react';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';

export interface Props {
    startTime: number,
    timeRemaining: number
}

const TimerCircleGraphic: React.FC<Props> = (props) => {
    const progress = ((props.startTime * 60 - props.timeRemaining) / (props.startTime * 60)) * 100

    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress sx={{margin: '2rem', color: '#e6e6e6',}} size='5rem' variant="determinate" value={100} />
            <CircularProgress sx={{margin: '2rem', position: 'absolute', left: 0,}} size='5rem' variant="determinate" value={progress} />
        </Box>
    )
};

export default TimerCircleGraphic;