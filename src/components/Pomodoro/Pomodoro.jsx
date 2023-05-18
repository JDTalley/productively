import { useCallback, useState } from "react";
import PomodoroConfig from "./PomodoroConfig";
import PomodoroTimer from "./PomodoroTimer";
//import LinearProgress from '@mui/material/LinearProgress';
//import ButtonGroup from '@mui/material/ButtonGroup';
//import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//import ToggleButton from '@mui/material/ToggleButton';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

function Pomodoro() {
  // States
  const [timer, setTimer] = useState({
    remaining: 1500, // default 25min pomodoro
    interval: 0, // default 1st pomodoro
    isActive: false, // default timer paused
    isBreak: false, // default nonbreak
  });

  const [config, setConfig] = useState({
    length: 25, // default 25min pomodoro
    interval: 4, // default 4 pomodoros to long break
    shortBreakLength: 5, // default 5min short break
    longBreakLength: 15, // default 5min short break
  });

  const [step, setStep] = useState("pomodoro");

  const handleSetTimer = useCallback(
    (remaining, interval, isActive, isBreak) => {
      setTimer({
        remaining: remaining,
        interval: interval,
        isActive: isActive,
        isBreak: isBreak,
      });
    },
    []
  );

  const handleSetConfig = useCallback(
    (length, interval, shortBreakLength, longBreakLength) => {
      setConfig({
        length: length,
        interval: interval,
        shortBreakLength: shortBreakLength,
        longBreakLength: longBreakLength,
      });

      setTimer({
        remaining: length * 60,
        interval: 0,
        isActive: false,
        isBreak: false,
      });

      setStep("pomodoro");
    },
    []
  );

  const handleSetStep = useCallback((step = "pomodoro") => {
    setStep(step);
  }, []);

  const handlePause = useCallback(() => {
    setTimer({
      ...timer,
      isActive: false,
    });
  }, [timer]);

  // Pause Button
  const handleTimerPause = (e) => {
    e.preventDefault();
    setTimer({
      ...timer,
      isActive: !timer.isActive,
    });
  };

  // Reset Button
  const handleTimerReset = (e) => {
    e.preventDefault();
    setTimer({
      remaining: config.length * 60,
      interval: 0,
      isActive: false,
      isBreak: false,
    });
  };

  const handlePomodoroToggleClick = (e) => {
    setStep("pomodoro");
    setTimer({
      ...timer,
      isActive: false,
      remaining: config.length * 60,
    });
  };

  const handleShortToggleClick = (e) => {
    setStep("short-break");
    setTimer({
      ...timer,
      isActive: false,
      remaining: config.shortBreakLength * 60,
    });
  };

  const handleLongToggleClick = (e) => {
    setStep("long-break");
    setTimer({
      ...timer,
      isActive: false,
      remaining: config.longBreakLength * 60,
    });
  };

  return (
    <div
      sx={
        {
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // margin: "2rem 1rem",
          // border: "1px solid #d1d1d1",
          // borderRadius: "10px",
          // overflow: "hidden",
        }
      }
    >
      <div
        // sx={{ width: "100%", height: ".5em" }}
        // variant="determinate"
        value={(timer.interval / config.interval) * 100}
      />
      <div color="primary" size="small" value={step} exclusive>
        <button value="pomodoro" onClick={handlePomodoroToggleClick}>
          Pomodoro
        </button>
        <button value="short-break" onClick={handleShortToggleClick}>
          Short Break
        </button>
        <button value="long-break" onClick={handleLongToggleClick}>
          Long Break
        </button>
      </div>
      <PomodoroTimer
        pomodoroTimer={timer}
        pomodoroConfig={config}
        pomodoroStep={step}
        handleSetTimer={handleSetTimer}
        handleSetStep={handleSetStep}
      />
      <div sx={{ padding: "1rem 0" }}>
        <button variant="contained" onClick={handleTimerPause}>
          Start/Stop
        </button>
        <PomodoroConfig
          pomodoroConfig={config}
          handleSetConfig={handleSetConfig}
          handlePause={handlePause}
        />
        <button variant="contained" onClick={handleTimerReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
