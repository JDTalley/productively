import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 5px;
`;

const PomodoroConfig = (props) => {
  // Manages Configuration Fields
  const [lengthTemp, setLengthTemp] = useState(props.pomodoroConfig.length);
  const [intervalTemp, setIntervalTemp] = useState(
    props.pomodoroConfig.interval
  );
  const [shortBreakTemp, setShortBreakTemp] = useState(
    props.pomodoroConfig.shortBreakLength
  );
  const [longBreakTemp, setLongBreakTemp] = useState(
    props.pomodoroConfig.longBreakLength
  );

  const handleConfigDefault = (e) => {
    e.preventDefault();
    setIntervalTemp(4);
    setLengthTemp(25);
    setShortBreakTemp(5);
    setLongBreakTemp(15);
  };

  const handleConfigSave = (e) => {
    e.preventDefault();

    props.handleSetConfig(
      lengthTemp,
      intervalTemp,
      shortBreakTemp,
      longBreakTemp
    );
    props.handleConfigToggle();
  };

  return (
    <Wrapper>
      <h1>Pomodoro Configuration</h1>
      <Input
        label="Work Session Goal"
        type="number"
        value={intervalTemp}
        onChange={(e) => setIntervalTemp(e.target.value)}
      ></Input>
      <Input
        label="Work Session Length"
        type="number"
        value={lengthTemp}
        onChange={(e) => setLengthTemp(e.target.value)}
      ></Input>
      <Input
        label="Short Break Length"
        type="number"
        value={shortBreakTemp}
        onChange={(e) => setShortBreakTemp(e.target.value)}
      ></Input>
      <Input
        label="Long Break Length"
        type="number"
        value={longBreakTemp}
        onChange={(e) => setLongBreakTemp(e.target.value)}
      ></Input>
      <Button name="Default configuration" onClick={handleConfigDefault}>
        Default Settings
      </Button>
      <Button name="Save configuration" onClick={handleConfigSave}>
        Save Settings
      </Button>
      <Button name="Cancel configuration" onClick={props.handleConfigToggle}>
        Cancel
      </Button>
    </Wrapper>
  );
};

export default PomodoroConfig;
