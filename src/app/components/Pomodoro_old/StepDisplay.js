"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  //width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    hsl(205, 62%, 49%) 50%,
    hsl(210, 30%, 8%) 0
  );
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //width: 100%;
`;

const StepButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: white;
  background-color: ${(props) =>
    props.selected ? "hsl(205, 0%, 65%)" : "white"};

  &:hover {
    background-color: hsl(210, 30%, 8%);
  }
`;

function StepDisplay({ progress, currentStep, handleSetCurrentStep }) {
  return (
    <Wrapper>
      <ProgressBar $progress={progress} />
      <StepWrapper>
        <StepButton
          selected={currentStep == "work"}
          name="Work timer"
          onClick={() => handleSetCurrentStep("work")}
        >
          Work
        </StepButton>
        <StepButton
          selected={currentStep == "short-break"}
          name="Short break timer"
          onClick={() => handleSetCurrentStep("short-break")}
        >
          Short Break
        </StepButton>
        <StepButton
          selected={currentStep == "long-break"}
          name="Long break timer"
          onClick={() => handleSetCurrentStep("long-break")}
        >
          Long Break
        </StepButton>
      </StepWrapper>
    </Wrapper>
  );
}

export default StepDisplay;
