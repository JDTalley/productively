"use client";
import styled from "styled-components";

const TimerText = styled.p`
  padding: 10px;
  text-align: center;
  color: white;
`;

// Function takes a number and adds padding to match format 00:00
const padNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

function TimerDisplay({ timeRemaining }) {
  // Get minutes and seconds
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining - Math.floor(timeRemaining / 60) * 60;

  // Convert mins and secs to friendly format and return result as a string
  return (
    <TimerText>
      {padNumber(minutes)}:{padNumber(seconds)}
    </TimerText>
  );
}

export default TimerDisplay;
