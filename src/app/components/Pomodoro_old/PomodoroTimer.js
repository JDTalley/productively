"use client";
import React from "react";
import styled from "styled-components";
import StepDisplay from "./StepDisplay";
import CircleProgressBar from "../ui/CircleProgressBar";
import TimerDisplay from "./PomodoroTimer";
import Button from "../ui/Button";

const ButtonGroup = styled.div`
  display: flex;
`;

function PomodoroTimer({
  workGoal,
  workLength,
  shortBreakLength,
  longBreakLength,
  timeRemaining,
  setTimeRemaining,
  workCount,
  setWorkCount,
  timerType,
  setTimerType,
  timerIsActive,
  setTimerIsActive,
}) {
  const setTimer = (timerType) => {
    setWorkCount(1);

    switch (timerType) {
      case "work":
        setTimeRemaining(workLength * 60);
        break;
      case "short-break":
        setTimeRemaining(shortBreakLength * 60);
        break;
      case "long-break":
        setTimeRemaining(longBreakLength * 60);
        break;
    }
  };

  const resetTimer = () => {};

  const handleTimerPause = () => {};

  const handleTimerReset = () => {};

  const handleSetTimerType = (newStep) => {
    setTimerType(newStep);
    setTimerIsActive(false);
    setTimer(newStep);
  };

  const progress = (workCount / workGoal) * 100;

  let percentComplete = 0;
  switch (timerType) {
    case "work":
      percentComplete =
        ((workLength * 60 - timeRemaining) / (workLength * 60)) * 100;
      break;
    case "short-break":
      percentComplete =
        ((shortBreakLength * 60 - timeRemaining) / (shortBreakLength * 60)) *
        100;
      break;
    case "long-break":
      percentComplete =
        ((longBreakLength * 60 - timeRemaining) / (longBreakLength * 60)) * 100;
  }

  return (
    <>
      {/* <StepDisplay
        progress={progress}
        timerType={timerType}
        handleSetCurrentStep={handleSetTimerType}
      />
      <CircleProgressBar percentComplete={percentComplete} />
      */}
      <StepDisplay
        progress={progress}
        timerType={timerType}
        handleSetCurrentStep={handleSetTimerType}
      />
      {/* <TimerDisplay timeRemaining={timeRemaining} /> */}
      <CircleProgressBar percentComplete={percentComplete} />
      <ButtonGroup>
        <Button
          name={timerIsActive ? "Pause timer" : "Start timer"}
          onClick={handleTimerPause}
        >
          {timerIsActive ? "Pause" : "Start"}
        </Button>
        <Button name="Reset timer" onClick={handleTimerReset}>
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
}

export default PomodoroTimer;
