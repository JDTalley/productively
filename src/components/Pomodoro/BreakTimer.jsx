import React, { useEffect } from "react";
import Timer from "./Timer";

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
      <button onClick={handleTimerPause}>Start/Stop</button>
      <button onClick={handleTimerReset}>Reset</button>
    </div>
  );
};

export default BreakTimer;
