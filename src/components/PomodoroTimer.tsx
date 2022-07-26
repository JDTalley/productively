import React, { useEffect, useState } from 'react';

function PomodoroTimer() {
    // States
    const [pomodoroTimer, setPomodoroTimer] = useState({
        timerRemaining: 1500, // default 25min pomodoro
        timerInterval: 0, // default 1st pomodoro
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
            timerInterval: 0,
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
                // Check which step of interval and set up next timer
                if (!pomodoroTimer.timerBreak) {
                    if (pomodoroTimer.timerInterval < pomodoroConfig.configInterval - 1) {
                        setPomodoroTimer({
                            timerRemaining: pomodoroConfig.configShortLength * 60,
                            timerInterval: pomodoroTimer.timerInterval,
                            timerActive: false,
                            timerBreak: true
                        });    
                    } else {
                        setPomodoroTimer({
                            timerRemaining: pomodoroConfig.configLongLength * 60,
                            timerInterval: -1,
                            timerActive: false,
                            timerBreak: true
                        });
                    }
                } else {
                    setPomodoroTimer({
                        timerRemaining: pomodoroConfig.configLength * 60,
                        timerInterval: pomodoroTimer.timerInterval + 1,
                        timerActive: false,
                        timerBreak: false
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
        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
        document.querySelector('.timer-config')?.classList.toggle('hidden');
        if (pomodoroTimer.timerActive) { toggleTimerPause() };
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
            timerInterval: 0,
            timerActive: false,
            timerBreak: false
        });

        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
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

        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
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
            <h3>Pomodoro Timer</h3>
            <div className='pomodoro-timer'>
                <div className='pomodoro-progress-bar'></div>
                <p>{timerText}</p>
                <button onClick={handleTimerPause}>Start/Stop</button>
                <button onClick={handleTimerReset}>Reset</button>
                <button onClick={handleTimerConfig}>Config</button>
            </div>
            <div className='hidden timer-config'>
                <h3>Pomodoro Config</h3>
                <label className="pomodoro-config-label">Pomodoro Interval 
                    <input 
                        className="pomodoro-config-input"
                        type="number"
                        min="1"
                        value={pomodoroConfigTemp.tempInterval} 
                        onChange={handleTimerConfigInterval} />
                </label>
                <label className="pomodoro-config-label">Pomodoro Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={pomodoroConfigTemp.tempLength} 
                        onChange={handleTimerConfigPomodoroLengthChange} />
                </label>
                <label className="pomodoro-config-label">Short Break Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={pomodoroConfigTemp.tempShortLength} 
                        onChange={handleTimerConfigShortLength} />
                </label>
                <label className="pomodoro-config-label">Long Break Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={pomodoroConfigTemp.tempLongLength} 
                        onChange={handleTimerConfigLongLength} />
                </label>
                <button onClick={handleConfigDefault}>Default Settings</button>
                <button onClick={handleConfigSave}>Save Settings</button>
                <button onClick={handleConfigCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default PomodoroTimer;