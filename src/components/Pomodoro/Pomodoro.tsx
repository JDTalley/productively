import { useCallback, useState } from 'react';
import PomodoroConfig from './PomodoroConfig';
import PomodoroTimer from './PomodoroTimer';
import LinearProgress from '@mui/material/LinearProgress';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

    const [step, setStep] = useState('pomodoro');

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

        setStep('pomodoro');
    }, []);

    const handleSetStep = useCallback((step='pomodoro') => {
        setStep(step);
    }, []);

    const handlePause = useCallback(() => {
        setTimer({
            ...timer,
            isActive: false
        });
    }, [timer]);

    // Pause Button
    const handleTimerPause = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setTimer({
            ...timer,
            isActive: !timer.isActive
        });
    }

    // Reset Button
    const handleTimerReset = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setTimer({
            remaining: config.length * 60,
            interval: 0,
            isActive: false,
            isBreak: false
        });
    }

    const handlePomodoroToggleClick = (e: React.ChangeEvent<any>) => {
        setStep('pomodoro');
        setTimer({
            ...timer,
            isActive: false,
            remaining: config.length * 60
        });
    };

    const handleShortToggleClick = (e: React.ChangeEvent<any>) => {
        setStep('short-break');
        setTimer({
            ...timer,
            isActive: false,
            remaining: config.shortBreakLength * 60
        });
    };

    const handleLongToggleClick = (e: React.ChangeEvent<any>) => {
        setStep('long-break');
        setTimer({
            ...timer,
            isActive: false,
            remaining: config.longBreakLength * 60
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '2rem 1rem',
            }}>
            <LinearProgress sx={{width: '100%', height: '.5em',}} variant="determinate" value={(timer.interval/config.interval) * 100} />
            <ToggleButtonGroup
                color="primary"
                size="small"
                value={step}
                exclusive
            >
                <ToggleButton value="pomodoro" onClick={handlePomodoroToggleClick}>Pomodoro</ToggleButton>
                <ToggleButton value="short-break" onClick={handleShortToggleClick}>Short Break</ToggleButton>
                <ToggleButton value="long-break" onClick={handleLongToggleClick}>Long Break</ToggleButton>
            </ToggleButtonGroup>
            <PomodoroTimer 
                pomodoroTimer={timer}
                pomodoroConfig={config}
                pomodoroStep = {step}
                handleSetTimer={handleSetTimer}
                handleSetStep={handleSetStep} />
            <ButtonGroup>
                <Button variant="contained" onClick={handleTimerPause}>Start/Stop</Button>
                <PomodoroConfig
                    pomodoroConfig={config}
                    handleSetConfig={handleSetConfig}
                    handlePause={handlePause} />
                <Button variant="contained" onClick={handleTimerReset}>Reset</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Pomodoro;