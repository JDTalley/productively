import React from "react";
import styled from "styled-components";

const TimerText = styled.p`
  padding: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.contrast};
`;

// Function takes a number and adds padding to match format 00:00
const padNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

const Timer = ({ time, isActive, onTick }) => {
  React.useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        onTick();
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  });

  // Get minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time - Math.floor(time / 60) * 60;

  return (
    <TimerText>
      {padNumber(minutes)}:{padNumber(seconds)}
    </TimerText>
  );
};

export default Timer;
