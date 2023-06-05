import React, { useState } from "react";
import styled from "styled-components";
import ConfigDisplay from "./ConfigDisplay";
import PomodoroTimer from "./Timer";
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

function Pomodoro() {
  const [workGoal, setWorkGoal] = useState(4);
  const [workLength, setWorkLength] = useState(25);
  const [shortBreakLength, setShortBreakLength] = useState(5);
  const [longBreakLength, setLongBreakLength] = useState(15);
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
      {configIsActive ? (
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
          timerType={timerType}
          timerIsActive={timerIsActive}
        />
      )}
      <Button
        name={configIsActive ? "Cancel configuration" : "Configure timer"}
        onClick={() => setConfigIsActive(!configIsActive)}
      >
        {configIsActive ? "Cancel" : "Config"}
      </Button>
    </Wrapper>
  );
}

export default Pomodoro;
