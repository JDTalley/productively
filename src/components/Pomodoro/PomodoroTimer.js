import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import CircleProgressBar from "../ui/CircleProgressBar";

const Wrapper = styled.div`
  padding: 16px 0;
`;

const PomodoroTimer = ({
  pomodoroConfig,
  pomodoroTimer,
  pomodoroStep,
  handleSetStep,
  handleSetTimer,
}) => {
  const setupPomodoro = () => {
    handleSetTimer(
      pomodoroConfig.length * 60,
      pomodoroTimer.interval + 1,
      false,
      false
    );
    handleSetStep("work");
  };

  const setupShortBreak = () => {
    handleSetTimer(
      pomodoroConfig.shortBreakLength * 60,
      pomodoroTimer.interval,
      false,
      true
    );
    handleSetStep("short-break");
  };

  const setupLongBreak = () => {
    handleSetTimer(pomodoroConfig.longBreakLength * 60, -1, false, true);
    handleSetStep("long-break");
  };

  const onTick = () => {
    if (pomodoroTimer.remaining > 0 && pomodoroTimer.isActive) {
      handleSetTimer(
        pomodoroTimer.remaining - 1,
        pomodoroTimer.interval,
        true,
        pomodoroTimer.isBreak
      );
    } else {
      if (pomodoroTimer.remaining === 0) {
        // Check which step of interval and set up next timer
        if (!pomodoroTimer.isBreak) {
          if (pomodoroTimer.interval < pomodoroConfig.interval - 1) {
            setupShortBreak();
          } else {
            setupLongBreak();
          }
        } else {
          setupPomodoro();
        }
      }
    }
  };

  let startTime = 0;

  switch (pomodoroStep) {
    case "work":
      startTime = pomodoroConfig.length;
      break;
    case "short-break":
      startTime = pomodoroConfig.shortBreakLength;
      break;
    case "long-break":
      startTime = pomodoroConfig.longBreakLength;
  }

  const percentComplete =
    ((startTime * 60 - pomodoroTimer.remaining) / (startTime * 60)) * 100;

  return (
    <Wrapper>
      <CircleProgressBar percentComplete={percentComplete} />
      <Timer
        time={pomodoroTimer.remaining}
        isActive={pomodoroTimer.isActive}
        onTick={onTick}
      />
    </Wrapper>
  );
};

export default PomodoroTimer;
