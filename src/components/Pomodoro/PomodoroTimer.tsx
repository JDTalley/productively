import React from 'react';
import { PomodoroTimerType, PomodoroConfigType } from '../interfaces/pomodoro.interface';
import Timer from './Timer';

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
        props.handleSetStep('Pomodoro');
    }

    const setupShortBreak= () => {
        props.handleSetTimer(props.pomodoroConfig.shortBreakLength * 60, props.pomodoroTimer.interval, false, true);
        props.handleSetStep('Short Break');
    }

    const setupLongBreak = () => {
        props.handleSetTimer(props.pomodoroConfig.longBreakLength * 60, -1, false, true);
        props.handleSetStep('Long Break');
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

    // Handlers
    // Pause Button
    const handleTimerPause = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        props.handleSetTimer(props.pomodoroTimer.remaining, props.pomodoroTimer.interval, !props.pomodoroTimer.isActive, props.pomodoroTimer.isBreak);
    }

    // Reset Button
    const handleTimerReset = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        props.handleSetTimer(props.pomodoroConfig.length * 60, 1, false, false);
    }

    return (
        <div>
            <h3>{props.pomodoroStep}</h3>
            <Timer 
                timeRemaining={props.pomodoroTimer.remaining}
                isActive={props.pomodoroTimer.isActive}
                onTick={onTick} />
            <button onClick={handleTimerPause}>Start/Stop</button>
            <button onClick={handleTimerReset}>Reset</button>
        </div>
    )
}

export default PomodoroTimer;