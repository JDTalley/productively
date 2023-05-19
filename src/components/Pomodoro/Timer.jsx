import { useEffect } from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const Timer = (props) => {
  useEffect(() => {
    if (props.isActive) {
      const interval = setInterval(() => {
        props.onTick();
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  });

  // Function takes a number and adds padding to match format 00:00
  const padNumber = (number) => {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  };

  // Get minutes and seconds
  const minutes = Math.floor(props.timeRemaining / 60);
  const seconds =
    props.timeRemaining - Math.floor(props.timeRemaining / 60) * 60;

  // Convert mins and secs to friendly format
  const timerText = `${padNumber(minutes)}:${padNumber(seconds)}`;

  return <StyledDiv>{timerText}</StyledDiv>;
};

export default Timer;
