import { useState } from "react";
import styled from "styled-components";

import Button from "../ui/Button/Button";

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 5px;
`;

function ConfigDisplay({
  workGoal,
  workLength,
  shortBreakLength,
  longBreakLength,
  configSave,
  handleConfigToggle,
}) {
  const [workGoalInput, setWorkGoalInput] = useState(workGoal);
  const [workLengthInput, setWorkLengthInput] = useState(workLength);
  const [shortBreakLengthInput, setShortBreakLengthInput] =
    useState(shortBreakLength);
  const [longBreakLengthInput, setLongBreakLengthInput] =
    useState(longBreakLength);

  const handleConfigDefault = (e) => {
    e.preventDefault();
    setPomodoroCountInput(4);
    setPomodoroLengthInput(25);
    setShortBreakLengthInput(5);
    setLongBreakLengthInput(15);
  };

  const handleConfigSave = (e) => {
    e.preventDefault();
    const config = {
      workGoal: parseInt(workGoalInput),
      workLength: parseInt(workLengthInput),
      shortBreakLength: parseInt(shortBreakLengthInput),
      longBreakLength: parseInt(longBreakLengthInput),
    };
    configSave(config);
  };

  return (
    <Wrapper>
      <Input
        label="Work Session Goal"
        type="number"
        value={workGoalInput}
        onChange={(e) => setWorkGoalInput(e.target.value)}
      ></Input>
      <Input
        label="Work Session Length"
        type="number"
        value={workLengthInput}
        onChange={(e) => setWorkLengthInput(e.target.value)}
      ></Input>
      <Input
        label="Short Break Length"
        type="number"
        value={shortBreakLengthInput}
        onChange={(e) => setShortBreakLengthInput(e.target.value)}
      ></Input>
      <Input
        label="Long Break Length"
        type="number"
        value={longBreakLengthInput}
        onChange={(e) => setLongBreakLengthInput(e.target.value)}
      ></Input>
      <Button name="Default configuration" onClick={handleConfigDefault}>
        Default Settings
      </Button>
      <Button name="Save configuration" onClick={handleConfigSave}>
        Save Settings
      </Button>
      <Button name="Cancel configuration" onClick={handleConfigToggle}>
        Cancel
      </Button>
    </Wrapper>
  );
}

export default ConfigDisplay;
