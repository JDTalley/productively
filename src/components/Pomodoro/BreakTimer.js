import React, { useEffect } from "react";
import Timer from "./Timer";

import Button from "../ui/Button";

const BreakTimer = (props) => {
  const onTick = () => {
    if (props.pomodoroTimer.remaining > 0) {
      props.setPomodoroTimer({
        ...props.pomodoroTimer,
        remaining: props.pomodoroTimer.remaining - 1,
      });
    } else {
      if (props.pomodoroTimer.remaining === 0) {
        // Check which step of interval and set up next timer
        if (!props.pomodoroTimer.isBreak) {
          if (
            props.pomodoroTimer.interval <
            props.pomodoroConfig.interval - 1
          ) {
            props.setPomodoroTimer({
              remaining: props.pomodoroConfig.shortBreakLength * 60,
              interval: props.pomodoroTimer.interval,
              isActive: false,
              isBreak: true,
            });
          } else {
            props.setPomodoroTimer({
              remaining: props.pomodoroConfig.longBreakLength * 60,
              interval: -1,
              isActive: false,
              isBreak: true,
            });
          }
        } else {
          props.setPomodoroTimer({
            remaining: props.pomodoroConfig.length * 60,
            interval: props.pomodoroTimer.interval + 1,
            isActive: false,
            isBreak: false,
          });
        }
      }
    }
  };

  const toggleTimerPause = () => {
    props.setPomodoroTimer({
      ...props.pomodoroTimer,
      isActive: !props.pomodoroTimer.isActive,
    });
  };

  const reset = () => {
    props.setPomodoroTimer({
      remaining: props.pomodoroConfig.length * 60,
      interval: 1,
      isActive: false,
      isBreak: false,
    });
  };

  // Handlers
  // Pause Button
  const handleTimerPause = (e) => {
    e.preventDefault();
    toggleTimerPause();
  };

  // Reset Button
  const handleTimerReset = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <div>
      <Timer
        timeRemaining={props.pomodoroTimer.remaining}
        isActive={props.pomodoroTimer.isActive}
        onTick={onTick}
      />
      <Button
        name="Start/Stop timer"
        text="Start/Stop"
        onClick={handleTimerPause}
      ></Button>
      <Button
        name="Reset timer"
        text="Reset"
        onClick={handleTimerReset}
      ></Button>
    </div>
  );
};

export default BreakTimer;
