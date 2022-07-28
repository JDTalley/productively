import React, { useEffect, useState } from 'react';

export interface PomodoroTimer {
    timerRemaining: number;
    timerInterval: number;
    timerActive: boolean;
    timerBreak: boolean;
}

export interface PomodoroConfig {
    configLength: number;
    configInterval: number;
    configShortLength: number;
    configLongLength: number;
}

export interface Props {
    pomodoroTimer: PomodoroTimer,
    pomodoroConfig: PomodoroConfig,
    setPomodoroTimer: React.Dispatch<React.SetStateAction<PomodoroTimer>>;
};

const PomodoroTimer: React.FC<Props> = (props) => {
    let pomodoroTimer = props.pomodoroTimer;
    const pomodoroConfig = props.pomodoroConfig;
    const setPomodoroTimer = props.setPomodoroTimer;

    useEffect(() => {
        if (pomodoroTimer.timerActive && pomodoroTimer.timerRemaining !== 0) {
            const interval = setInterval(() => {
                setPomodoroTimer({
                    ...pomodoroTimer,
                    timerRemaining: pomodoroTimer.timerRemaining - 1
                });
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        } 
        if (pomodoroTimer.timerActive && pomodoroTimer.timerRemaining === 0) {
            return () => {
                checkInterval();
            }
        }

        // Checks what part of interval is active and sets up timer for next step
        const checkInterval = () => {

            if (!pomodoroTimer.timerBreak) {
                if (pomodoroTimer.timerInterval < pomodoroConfig.configInterval) {
                    setPomodoroTimer({
                        timerRemaining: pomodoroConfig.configShortLength * 60,
                        timerInterval: pomodoroTimer.timerInterval + 1,
                        timerActive: false,
                        timerBreak: true
                    });    
                } else {
                    setPomodoroTimer({
                        timerRemaining: pomodoroConfig.configLongLength * 60,
                        timerInterval: 1,
                        timerActive: false,
                        timerBreak: true
                    });
                }
            } else {
                setPomodoroTimer({
                    timerRemaining: pomodoroConfig.configLength * 60,
                    timerInterval: pomodoroTimer.timerInterval,
                    timerActive: false,
                    timerBreak: true
                });                
            }
        }
    }, [pomodoroTimer, setPomodoroTimer, pomodoroConfig]);

    const toggleTimerPause = () => {
        setPomodoroTimer({
            ...pomodoroTimer,
            timerActive: !pomodoroTimer.timerActive
        });
    }

    const reset = () => {
        setPomodoroTimer({
            timerRemaining: pomodoroConfig.configLength * 60,
            timerInterval: 1,
            timerActive: false,
            timerBreak: false
        });
    }

    // Handlers
    // Pause Button
    const handleTimerPause = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        toggleTimerPause();
    }

    // Reset Button
    const handleTimerReset = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        reset();
    }

    // Function takes a number and adds padding to match format 00:00
    const padNumber = (number: number) => {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    // Get minutes and seconds
    const minutes: number = Math.floor((pomodoroTimer.timerRemaining / 60));;
    const seconds: number = pomodoroTimer.timerRemaining - Math.floor((pomodoroTimer.timerRemaining / 60)) * 60;

    // Convert mins and secs to friendly format
    const timerText = `${padNumber(minutes)}:${padNumber(seconds)}`;

    return (
        <div>
            <p>{timerText}</p>
            <button onClick={handleTimerPause}>Start/Stop</button>
            <button onClick={handleTimerReset}>Reset</button>
        </div>
    )
}

export default PomodoroTimer;