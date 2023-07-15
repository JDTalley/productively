'use client';
import React from 'react';
import styled from 'styled-components';
import ConfigDisplay from './ConfigDisplay';
import PomodoroTimer from './PomodoroTimer';
import Button from '../ui/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 32px 16px;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  max-width: 350px;
`;

function Pomodoro() {
  const [workGoal, setWorkGoal] = React.useState(4);
  const [workLength, setWorkLength] = React.useState(25);
  const [shortBreakLength, setShortBreakLength] = React.useState(5);
  const [longBreakLength, setLongBreakLength] = React.useState(15);
  const [timeRemaining, setTimeRemaining] = React.useState(1500);
  const [workCount, setWorkCount] = React.useState(1);
  const [timerType, setTimerType] = React.useState(false);
  const [timerIsActive, setTimerIsActive] = React.useState(false);
  const [configIsActive, setConfigIsActive] = React.useState(false);

  const configSave = (config) => {
    setWorkGoal(config.workGoal);
    setWorkLength(config.workLength);
    setShortBreakLength(config.shortBreakLength);
    setLongBreakLength(config.longBreakLength);
    setConfigIsActive(!configIsActive);
  };

  return (
    <Wrapper>
      {/* {configIsActive ? (
        <ConfigDisplay
          workGoal={workGoal}
          workLength={workLength}
          shortBreakLength={shortBreakLength}
          longBreakLength={longBreakLength}
          configSave={configSave}
          handleConfigToggle={() => setConfigIsActive(!configIsActive)}
        />
      ) : (
        <PomodoroTimer
          workGoal={workGoal}
          workLength={workLength}
          shortBreakLength={shortBreakLength}
          longBreakLength={longBreakLength}
          timeRemaining={timeRemaining}
          workCount={workCount}
          setWorkCount={setWorkCount}
          timerType={timerType}
          timerIsActive={timerIsActive}
        />
      )}*/}
      <PomodoroTimer
        workGoal={workGoal}
        workLength={workLength}
        shortBreakLength={shortBreakLength}
        longBreakLength={longBreakLength}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        workCount={workCount}
        setWorkCount={setWorkCount}
        timerType={timerType}
        setTimerType={setTimerType}
        timerIsActive={timerIsActive}
        setTimerIsActive={setTimerIsActive}
      />
      <ConfigDisplay
        workGoal={workGoal}
        workLength={workLength}
        shortBreakLength={shortBreakLength}
        longBreakLength={longBreakLength}
        configSave={configSave}
        handleConfigToggle={() => setConfigIsActive(!configIsActive)}
      />
      <Button
        name={configIsActive ? 'Cancel configuration' : 'Configure timer'}
        onClick={() => setConfigIsActive(!configIsActive)}
      >
        {configIsActive ? 'Cancel' : 'Config'}
      </Button>
    </Wrapper>
  );
}

export default Pomodoro;
