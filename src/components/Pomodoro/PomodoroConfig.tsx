import React, { useState } from 'react';
import { PomodoroConfigType} from '../interfaces/pomodoro.interface';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export interface Props {
    pomodoroConfig: PomodoroConfigType,
    handleSetConfig: (length: number, interval: number, shortBreakLength: number, longBreakLength: number) => void;
    handlePause: () => void;
};

const PomodoroConfig: React.FC<Props> = (props) => {
    // Manages Configuration Fields
    const [configTemp, setConfigTemp] = useState({
        length: 25, 
        interval: 4, 
        shortBreakLength: 5, 
        longBreakLength: 15 
    });

    // Dialog Open or Closed
    const [open, setOpen] = useState(false);

    // Handlers

    const handleClickOpen = () => {
        setOpen(true);

        props.handlePause();
    };

    const handleClickClose = () => {
        setOpen(false);

        setConfigTemp({
            length: props.pomodoroConfig.length,
            interval: props.pomodoroConfig.interval,
            shortBreakLength: props.pomodoroConfig.shortBreakLength,
            longBreakLength: props.pomodoroConfig.longBreakLength,
        });
    };

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
        setOpen(false);
    }

    return (
        <Box>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Pomodoro Configuration</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Pomodoro Interval"
                        variant="standard"
                        type="number"
                        value={configTemp.interval}
                        onChange={handleTimerConfigInterval}
                    />
                    <TextField
                        label="Pomodoro Length"
                        variant="standard"
                        type="number"
                        value={configTemp.length}
                        onChange={handleTimerConfigPomodoroLengthChange}
                    />
                    <TextField
                        label="Short Break Length"
                        variant="standard"
                        type="number"
                        value={configTemp.shortBreakLength}
                        onChange={handleTimerConfigShortLength}
                    />
                    <TextField
                        label="Long Break Length"
                        variant="standard"
                        type="number"
                        value={configTemp.longBreakLength}
                        onChange={handleTimerConfigLongLength}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleConfigDefault}>Default Settings</Button>
                    <Button variant="contained" onClick={handleConfigSave}>Save Settings</Button>
                    <Button variant="contained" onClick={handleClickClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Button variant="contained" onClick={handleClickOpen}>Config</Button>
        </Box>
    )
}

export default PomodoroConfig