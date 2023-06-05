import { useCallback, useState } from "react";
import styled from "styled-components";
import PomodoroConfig from "./PomodoroConfig";
import StepDisplay from "./StepDisplay";
import PomodoroTimer from "./PomodoroTimer";
import Button from "../ui/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 32px 16px;
  border: 1px solid ${(props) => props.theme.colors.grayscale.contrast};
  border-radius: 10px;
  overflow: hidden;
  max-width: 350px;
`;

const ButtonGroup = styled.div`
  display: flex;
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

  const [step, setStep] = useState("work");

  const [configIsActive, setConfigIsActive] = useState(false);

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

      setStep("work");
    },
    []
  );

  const handleSetStep = useCallback((step = "work") => {
    setStep(step);
    switch (step) {
      case "work":
        setTimer({
          ...timer,
          isActive: false,
          remaining: config.length * 60,
        });
        break;
      case "short-break":
        setTimer({
          ...timer,
          isActive: false,
          remaining: config.shortBreakLength * 60,
        });
        break;
      case "long-break":
        setTimer({
          ...timer,
          isActive: false,
          remaining: config.longBreakLength * 60,
        });
        break;
    }
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

  const progress = (timer.interval / config.interval) * 100;

  return (
    <Wrapper>
      <StepDisplay
        progress={progress}
        currentStep={step}
        handleSetStep={handleSetStep}
      />
      {configIsActive ? (
        <PomodoroConfig
          pomodoroConfig={config}
          handleSetConfig={handleSetConfig}
          handlePause={handlePause}
          handleConfigToggle={() => setConfigIsActive(!configIsActive)}
        />
      ) : (
        <>
          <PomodoroTimer
            pomodoroTimer={timer}
            pomodoroConfig={config}
            pomodoroStep={step}
            handleSetTimer={handleSetTimer}
            handleSetStep={handleSetStep}
          />
          <ButtonGroup>
            <Button
              name={timer.isActive ? "Pause timer" : "Start timer"}
              onClick={handleTimerPause}
            >
              {timer.isActive ? "Pause" : "Start"}
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              name={configIsActive ? "Cancel configuration" : "Configure timer"}
              onClick={() => setConfigIsActive(!configIsActive)}
            >
              {configIsActive ? "Cancel" : "Config"}
            </Button>
            <Button name="Reset timer" onClick={handleTimerReset}>
              Reset
            </Button>
          </ButtonGroup>
        </>
      )}
    </Wrapper>
  );
}

export default Pomodoro;
