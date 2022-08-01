import React, { useState } from 'react';
import { PomodoroConfigType} from '../interfaces/pomodoro.interface';

export interface Props {
    pomodoroConfig: PomodoroConfigType,
    handleSetConfig: (length: number, interval: number, shortBreakLength: number, longBreakLength: number) => void;
    handlePause: () => void;
};

const PomodoroConfig: React.FC<Props> = (props) => {
    const [configTemp, setConfigTemp] = useState({
        length: 25, 
        interval: 4, 
        shortBreakLength: 5, 
        longBreakLength: 15 
    });

    // Handlers
    // Show Config Button
    const handleShowConfig = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
        document.querySelector('.timer-config')?.classList.toggle('hidden');
        // Pause?
        props.handlePause();
    }

    const handleTimerConfigPomodoroLengthChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setConfigTemp({
            ...configTemp,
            length: e.target.value
        });
    }

    const handleTimerConfigInterval = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setConfigTemp({
            ...configTemp,
            interval: e.target.value
        });
    }

    const handleTimerConfigShortLength = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setConfigTemp({
            ...configTemp,
            shortBreakLength: e.target.value
        });
    }

    const handleTimerConfigLongLength = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setConfigTemp({
            ...configTemp,
            longBreakLength: e.target.value
        });
    }

    const handleConfigDefault = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setConfigTemp({
            length: 25,
            interval: 4,
            shortBreakLength: 5,
            longBreakLength: 15
        });
    }

    const handleConfigSave = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        props.handleSetConfig(configTemp.length, configTemp.interval, configTemp.shortBreakLength, configTemp.longBreakLength);

        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
        document.querySelector('.timer-config')?.classList.toggle('hidden');
    }

    const handleConfigCancel = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setConfigTemp({
            length: props.pomodoroConfig.length,
            interval: props.pomodoroConfig.interval,
            shortBreakLength: props.pomodoroConfig.shortBreakLength,
            longBreakLength: props.pomodoroConfig.longBreakLength,
        });

        document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
        document.querySelector('.timer-config')?.classList.toggle('hidden');
    }

    return (
        <div>
            <div className='hidden timer-config'>
                <h3>Pomodoro Config</h3>
                <label className="pomodoro-config-label">Pomodoro Interval 
                    <input 
                        className="pomodoro-config-input"
                        type="number"
                        min="1"
                        value={configTemp.interval} 
                        onChange={handleTimerConfigInterval} />
                </label>
                <label className="pomodoro-config-label">Pomodoro Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={configTemp.length} 
                        onChange={handleTimerConfigPomodoroLengthChange} />
                </label>
                <label className="pomodoro-config-label">Short Break Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={configTemp.shortBreakLength} 
                        onChange={handleTimerConfigShortLength} />
                </label>
                <label className="pomodoro-config-label">Long Break Length
                    <input 
                        className="pomodoro-config-input"
                        type="number" 
                        min="0" 
                        value={configTemp.longBreakLength} 
                        onChange={handleTimerConfigLongLength} />
                </label>
                <button onClick={handleConfigDefault}>Default Settings</button>
                <button onClick={handleConfigSave}>Save Settings</button>
                <button onClick={handleConfigCancel}>Cancel</button>
            </div>
            <button onClick={handleShowConfig}>Config</button>
        </div>
    )
}

export default PomodoroConfig