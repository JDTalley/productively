import React, { useEffect, useState } from 'react';

function PomodoroTimer() {
    // States
    const [pomodoroTimer, setPomodoroTimer] = useState({
        timerRemaining: 1500, // default 25min pomodoro
        timerInterval: 1, // default 1st pomodoro
        timerActive: false, // default timer paused
        timerBreak: false // default nonbreak
    });
    const [pomodoroConfig, setPomodoroConfig] = useState({
        configLength: 25, // default 25min pomodoro
        configInterval: 4, // default 4 pomodoros to long break
        configShortLength: 5, // default 5min short break
        configLongLength: 15 // default 5min short break
    });
    const [pomodoroConfigTemp, setPomodoroConfigTemp] = useState({
        tempLength: 25, 
        tempInterval: 4, 
        tempShortLength: 5, 
        tempLongLength: 15 
    });

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

    // Timer Logic
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

    // Show Config Button
    const handleTimerConfig = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        document.querySelector('.timer-config')?.classList.toggle('hidden');
        toggleTimerPause();
    }

    // 
    const handleTimerConfigPomodoroLengthChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setPomodoroConfigTemp({
            ...pomodoroConfigTemp,
            tempLength: e.target.value
        });
    }

    const handleTimerConfigInterval = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setPomodoroConfigTemp({
            ...pomodoroConfigTemp,
            tempInterval: e.target.value
        });
    }

    const handleTimerConfigShortLength = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setPomodoroConfigTemp({
            ...pomodoroConfigTemp,
            tempShortLength: e.target.value
        });
    }

    const handleTimerConfigLongLength = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setPomodoroConfigTemp({
            ...pomodoroConfigTemp,
            tempLongLength: e.target.value
        });
    }

    const handleConfigDefault = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setPomodoroConfigTemp({
            tempLength: 25,
            tempInterval: 4,
            tempShortLength: 5,
            tempLongLength: 15
        });
    }

    const handleConfigSave = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setPomodoroConfig({
            configLength: pomodoroConfigTemp.tempLength,
            configInterval: pomodoroConfigTemp.tempInterval,
            configShortLength: pomodoroConfigTemp.tempShortLength,
            configLongLength: pomodoroConfigTemp.tempLongLength,
        });

        setPomodoroTimer({
            timerRemaining: pomodoroConfigTemp.tempLength * 60,
            timerInterval: 1,
            timerActive: false,
            timerBreak: false
        });

        document.querySelector('.timer-config')?.classList.toggle('hidden');
    }

    const handleConfigCancel = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setPomodoroConfigTemp({
            tempLength: pomodoroConfig.configLength,
            tempInterval: pomodoroConfig.configInterval,
            tempShortLength: pomodoroConfig.configShortLength,
            tempLongLength: pomodoroConfig.configLongLength,
        });

        document.querySelector('.timer-config')?.classList.toggle('hidden');
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
            <div className='hidden timer-config'>
                <h3>Pomodoro Config</h3>
                <label>Pomodoro Interval: 
                    <input type="number" value={pomodoroConfigTemp.tempInterval} onChange={handleTimerConfigInterval} />
                </label>
                <br/>
                <label>Pomodoro Length: 
                    <input type="number" value={pomodoroConfigTemp.tempLength} onChange={handleTimerConfigPomodoroLengthChange} />
                </label>
                <br/>
                <label>Short Break Length: 
                    <input type="number" value={pomodoroConfigTemp.tempShortLength} onChange={handleTimerConfigShortLength} />
                </label>
                <br/>
                <label>Long Break Length: 
                    <input type="number" value={pomodoroConfigTemp.tempLongLength} onChange={handleTimerConfigLongLength} />
                </label>
                <br/>
                <button onClick={handleConfigDefault}>Default Settings</button>
                <button onClick={handleConfigSave}>Save Settings</button>
                <button onClick={handleConfigCancel}>Cancel</button>
            </div>
            <button onClick={handleTimerPause}>Start/Stop</button>
            <button onClick={handleTimerReset}>Reset</button>
            <button onClick={handleTimerConfig}>Config</button>
        </div>
    )
}

export default PomodoroTimer;