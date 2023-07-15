'use client';
import React from 'react';
import useCountdownTime from '../../hooks/useCountdownTime';
import styled from 'styled-components';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import CircleProgressBar from '../ui/CircleProgressBar';
import { roboto_mono } from '../../fonts';

// Wrapper for component
const Container = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-bottom: 16px;
`;

const StepContainer = styled.div`
  width: 100%;
`;

// Wrapper for the mode/step buttons
const StepButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

// Mode/Step buttons
const StepButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: white;
  background-color: ${(props) =>
    props.$selected ? 'hsl(205, 62%, 49%)' : 'hsl(205, 0%, 65%)'};

  &:hover {
    background-color: hsl(205, 62%, 55%);
  }
`;

const CircleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

// Text for time remaining in timer
const TimerText = styled.p`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  //letter-spacing: 0.1rem;
`;
/**
 * Enum for timer modes
 * @readonly
 * @enum
 */
const Modes = { POM: 'Pomodoro', SHORT: 'Short Break', LONG: 'Long Break' };

/**
 * @param {*} config Object storing pomodoro config items {pomodoro, shortBreak, longBreak, interval}
 * @returns PomodoroTimer react component
 */
function PomodoroTimer({ config }) {
  const [mode, setMode] = React.useState(Modes.POM);
  const [interval, setInterval] = React.useState(1);
  const [time, setTime, timerRunning, setTimerRunning] = useCountdownTime(
    config.pomodoro * 60
  );

  // If timer hits zero, check for next step
  if (time === 0) {
    // Check current mode
    switch (mode) {
      case Modes.POM:
        // If less than configured intervals have been completed, short break
        if (interval < config.interval) {
          setMode(Modes.SHORT);
          setTime(config.shortBreak * 60);
          // Else long break
        } else {
          setMode(Modes.LONG);
          setTime(config.longBreak * 60);
        }
        // Progress interval
        setInterval(interval + 1);
        break;
      case Modes.SHORT:
        setMode(Modes.POM);
        setTime(config.pomodoro * 60);
        break;
      case Modes.LONG:
        setMode(Modes.POM);
        setTime(config.pomodoro * 60);
        // Reset interval after long break
        setInterval(1);
        break;
      default:
        console.log(`Incompatable Mode:${mode}`);
    }
  }

  // Get minutes and seconds for displaying timer
  const minutes = Math.floor(time / 60);
  const seconds = time - Math.floor(time / 60) * 60;

  // Get percentage of timer completion for circle progress bar
  let percentComplete = 0;
  let configTimeInSecs = 0;
  switch (mode) {
    case Modes.POM:
      configTimeInSecs = config.pomodoro * 60;
      break;
    case Modes.SHORT:
      configTimeInSecs = config.shortBreak * 60;
      break;
    case Modes.LONG:
      configTimeInSecs = config.longBreak * 60;
      break;
    default:
      console.log(`Incompatable Mode:${mode}`);
  }
  percentComplete = ((configTimeInSecs - time) / configTimeInSecs) * 100;

  return (
    <Container>
      <StepContainer>
        <ProgressBar
          $progress={((interval - 1) / config.interval) * 100}
        ></ProgressBar>
        <StepButtonGroup>
          <StepButton
            name='Select Pomodoro'
            onClick={() => {
              setMode(Modes.POM);
              setTime(config.pomodoro * 60);
            }}
            $selected={mode === Modes.POM}
          >
            {Modes.POM}
          </StepButton>
          <StepButton
            name='Select Short Break'
            onClick={() => {
              setMode(Modes.SHORT);
              setTime(config.shortBreak * 60);
            }}
            $selected={mode === Modes.SHORT}
          >
            {Modes.SHORT}
          </StepButton>
          <StepButton
            name='Select Long Break'
            onClick={() => {
              setMode(Modes.LONG);
              setTime(config.longBreak * 60);
            }}
            $selected={mode === Modes.LONG}
          >
            {Modes.LONG}
          </StepButton>
        </StepButtonGroup>
      </StepContainer>
      <CircleContainer>
        <CircleProgressBar $progress={percentComplete}>
          <TimerText className={roboto_mono.className}>
            {padNumber(minutes)}:{padNumber(seconds)}
          </TimerText>
        </CircleProgressBar>
      </CircleContainer>

      <Button
        name='Toggle Timer'
        onClick={() => setTimerRunning(!timerRunning)}
      >
        {timerRunning ? 'Stop' : 'Start'}
      </Button>
    </Container>
  );
}

/* Helper Functions */
// Function takes a number and adds padding to match format 00:00
const padNumber = (number) => {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
};

export default PomodoroTimer;
