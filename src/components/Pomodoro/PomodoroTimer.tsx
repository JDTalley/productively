import React from 'react';
import { PomodoroTimerType, PomodoroConfigType } from '../interfaces/pomodoro.interface';
import Timer from './Timer';
import TimerCircleGraphic from './TimerCircleGraphic';
import Box from '@mui/material/Box';

export interface Props {
    pomodoroTimer: PomodoroTimerType,
    pomodoroConfig: PomodoroConfigType,
    pomodoroStep: string,
    handleSetTimer: (length: number, interval: number, isActive: boolean, isBreak: boolean) => void;
    handleSetStep: (step: string) => void;
};

const PomodoroTimer: React.FC<Props> = (props) => {
    const setupPomodoro = () => {
        props.handleSetTimer(props.pomodoroConfig.length * 60, props.pomodoroTimer.interval + 1, false, false);
        props.handleSetStep('pomodoro');
    }

    const setupShortBreak= () => {
        props.handleSetTimer(props.pomodoroConfig.shortBreakLength * 60, props.pomodoroTimer.interval, false, true);
        props.handleSetStep('short-break');
    }

    const setupLongBreak = () => {
        props.handleSetTimer(props.pomodoroConfig.longBreakLength * 60, -1, false, true);
        props.handleSetStep('long-break');
    }

    const onTick = () => {
        if (props.pomodoroTimer.remaining > 0 && props.pomodoroTimer.isActive) {
            props.handleSetTimer(props.pomodoroTimer.remaining - 1, props.pomodoroTimer.interval, true, props.pomodoroTimer.isBreak);
        } else {
            if (props.pomodoroTimer.remaining === 0) {
                // Check which step of interval and set up next timer
                if (!props.pomodoroTimer.isBreak) {
                    if (props.pomodoroTimer.interval < props.pomodoroConfig.interval - 1) {
                        setupShortBreak();  
                    } else {
                        setupLongBreak();
                    }
                } else {
                    setupPomodoro(); 
                }
            }
        }
    }

    let startTime = 0;

    switch (props.pomodoroStep) {
        case 'pomodoro':
            startTime = props.pomodoroConfig.length;
            break;
        case 'short-break':
            startTime = props.pomodoroConfig.shortBreakLength;
            break;
        case 'long-break':
            startTime = props.pomodoroConfig.longBreakLength; 
    }

    return (
        <Box sx={{margin: '1rem 0',}}>
            <TimerCircleGraphic
                startTime={startTime}
                timeRemaining={props.pomodoroTimer.remaining} />
            <Timer 
                timeRemaining={props.pomodoroTimer.remaining}
                isActive={props.pomodoroTimer.isActive}
                onTick={onTick} />
        </Box>
    )
}

export default PomodoroTimer;