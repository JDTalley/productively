import React, { useState } from "react";
import styled from "styled-components";

import Button from "../ui/Button";
//import Button from '@mui/material/Button';
//import Dialog from '@mui/material/Dialog';
//import DialogTitle from '@mui/material/DialogTitle';
//import DialogContent from '@mui/material/DialogContent';
//import DialogActions from '@mui/material/DialogActions';
//import TextField from '@mui/material/TextField';
//import Box from '@mui/material/Box';

const PomodoroConfig = (props) => {
  // Manages Configuration Fields
  const [configTemp, setConfigTemp] = useState({
    length: 25,
    interval: 4,
    shortBreakLength: 5,
    longBreakLength: 15,
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

  const handleTimerConfigPomodoroLengthChange = (e) => {
    e.preventDefault();
    setConfigTemp({
      ...configTemp,
      length: e.target.value,
    });
  };

  const handleTimerConfigInterval = (e) => {
    e.preventDefault();
    setConfigTemp({
      ...configTemp,
      interval: e.target.value,
    });
  };

  const handleTimerConfigShortLength = (e) => {
    e.preventDefault();
    setConfigTemp({
      ...configTemp,
      shortBreakLength: e.target.value,
    });
  };

  const handleTimerConfigLongLength = (e) => {
    e.preventDefault();
    setConfigTemp({
      ...configTemp,
      longBreakLength: e.target.value,
    });
  };

  const handleConfigDefault = (e) => {
    e.preventDefault();

    setConfigTemp({
      length: 25,
      interval: 4,
      shortBreakLength: 5,
      longBreakLength: 15,
    });
  };

  const handleConfigSave = (e) => {
    e.preventDefault();
    props.handleSetConfig(
      configTemp.length,
      configTemp.interval,
      configTemp.shortBreakLength,
      configTemp.longBreakLength
    );
    setOpen(false);
  };

  return (
    <div>
      <div open={open} onClose={handleClickClose}>
        <h1>Pomodoro Configuration</h1>
        <div>
          <input
            label="Pomodoro Interval"
            variant="standard"
            type="number"
            value={configTemp.interval}
            onChange={handleTimerConfigInterval}
          />
          <input
            label="Pomodoro Length"
            variant="standard"
            type="number"
            value={configTemp.length}
            onChange={handleTimerConfigPomodoroLengthChange}
          />
          <input
            label="Short Break Length"
            variant="standard"
            type="number"
            value={configTemp.shortBreakLength}
            onChange={handleTimerConfigShortLength}
          />
          <input
            label="Long Break Length"
            variant="standard"
            type="number"
            value={configTemp.longBreakLength}
            onChange={handleTimerConfigLongLength}
          />
        </div>
        <div>
          <Button name="Default configuration" onClick={handleConfigDefault}>
            Default Settings
          </Button>
          <Button name="Save configuration" onClick={handleConfigSave}>
            Save Settings
          </Button>
          <Button name="Cancel configuration" onClick={handleClickClose}>
            Cancel
          </Button>
        </div>
      </div>
      <Button name="Configure timer" onClick={handleClickOpen}>
        Config
      </Button>
    </div>
  );
};

export default PomodoroConfig;
