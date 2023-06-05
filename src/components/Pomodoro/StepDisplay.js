import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  //width: 100%;
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
  //width: 100%;
`;

const StepButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: ${(props) => props.theme.colors.primary.contrast};
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.primary.light
      : props.theme.colors.grayscale.contrast};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.main};
  }
`;

function StepDisplay({ progress, currentStep, handleSetStep }) {
  return (
    <Wrapper>
      <ProgressBar progress={progress} />
      <StepWrapper>
        <StepButton
          selected={currentStep == "work"}
          name="Work timer"
          onClick={() => handleSetStep("work")}
        >
          Work
        </StepButton>
        <StepButton
          selected={currentStep == "short-break"}
          name="Short break timer"
          onClick={() => handleSetStep("short-break")}
        >
          Short Break
        </StepButton>
        <StepButton
          selected={currentStep == "long-break"}
          name="Long break timer"
          onClick={() => handleSetStep("long-break")}
        >
          Long Break
        </StepButton>
      </StepWrapper>
    </Wrapper>
  );
}

export default StepDisplay;
