import { useCallback, useState } from 'react';
import PomodoroConfig from './PomodoroConfig';
import PomodoroTimer from './PomodoroTimer';

function Pomodoro() {
    // States
    const [timer, setTimer] = useState({
        remaining: 1500, // default 25min pomodoro
        interval: 0, // default 1st pomodoro
        isActive: false, // default timer paused
        isBreak: false // default nonbreak
    });

    const [config, setConfig] = useState({
        length: 25, // default 25min pomodoro
        interval: 4, // default 4 pomodoros to long break
        shortBreakLength: 5, // default 5min short break
        longBreakLength: 15 // default 5min short break
    });

    const [step, setStep] = useState('Pomodoro');

    const handleSetTimer = useCallback((remaining: number, interval: number, isActive: boolean, isBreak: boolean) => {
        setTimer({
            remaining: remaining,
            interval: interval,
            isActive: isActive,
            isBreak: isBreak
        });
    }, []);

    const handleSetConfig = useCallback((length: number, interval: number, shortBreakLength: number, longBreakLength: number) => {
        setConfig({
            length: length,
            interval: interval,
            shortBreakLength: shortBreakLength,
            longBreakLength: longBreakLength
        });

        setTimer({
            remaining: length * 60,
            interval: 0,
            isActive: false,
            isBreak: false
        });

        setStep('Pomodoro');
    }, []);

    const handleSetStep = useCallback((step='Pomodoro') => {
        setStep(step);
    }, []);

    const handlePause = useCallback(() => {
        setTimer({
            ...timer,
            isActive: false
        });
    }, [timer]);

    return (
        <div>
            <PomodoroTimer 
                pomodoroTimer={timer}
                pomodoroConfig={config}
                pomodoroStep = {step}
                handleSetTimer={handleSetTimer}
                handleSetStep={handleSetStep} />
            <PomodoroConfig
                pomodoroConfig={config}
                handleSetConfig={handleSetConfig}
                handlePause={handlePause} />
        </div>
    )
}

export default Pomodoro;