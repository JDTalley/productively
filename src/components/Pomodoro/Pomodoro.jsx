import { useCallback, useState } from "react";
import styled from "styled-components";

import PomodoroConfig from "./PomodoroConfig";
import PomodoroTimer from "./PomodoroTimer";

import Button from "../ui/Button";
//import LinearProgress from '@mui/material/LinearProgress';
//import ButtonGroup from '@mui/material/ButtonGroup';
//import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//import ToggleButton from '@mui/material/ToggleButton';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 32px;
  flex-direction: column;
  align-items: center;
  margin: 32px 16px;
  border: 1px solid ${(props) => props.theme.colors.grayscale.contrast};
  border-radius: 10px;
  overflow: hidden;
  max-width: 350px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary.main}
      ${(props) => props.progress + "%"},
    ${(props) => props.theme.colors.grayscale.light} 0
  );
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StepButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: ${(props) => props.theme.colors.primary.contrast};
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.light};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.main};
  }
`;

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
    <Wrapper>
      <ProgressBar
        // sx={{ width: "100%", height: ".5em" }}
        // variant="determinate"
        progress={(timer.interval / config.interval) * 100}
      />
      <StepWrapper>
        <StepButton
          selected={step == "pomodoro"}
          name="Pomodoro timer"
          onClick={handlePomodoroToggleClick}
        >
          Pomodoro
        </StepButton>
        <StepButton
          selected={step == "short-break"}
          name="Short break timer"
          onClick={handleShortToggleClick}
        >
          Short Break
        </StepButton>
        <StepButton
          selected={step == "long-break"}
          name="Long break timer"
          onClick={handleLongToggleClick}
        >
          Long Break
        </StepButton>
      </StepWrapper>
      <PomodoroTimer
        pomodoroTimer={timer}
        pomodoroConfig={config}
        pomodoroStep={step}
        handleSetTimer={handleSetTimer}
        handleSetStep={handleSetStep}
      />
      <div>
        <Button name="Start/Stop timer" onClick={handleTimerPause}>
          Start/Stop
        </Button>
        <PomodoroConfig
          pomodoroConfig={config}
          handleSetConfig={handleSetConfig}
          handlePause={handlePause}
        />
        <Button name="Reset timer" onClick={handleTimerReset}>
          Reset
        </Button>
      </div>
    </Wrapper>
  );
}

export default Pomodoro;
