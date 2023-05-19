import React from "react";

import styled from "styled-components";
//import Box from "@mui/material/Box";
//import CircularProgress from '@mui/material/CircularProgress';

const CircleProgress = styled.div`
  padding: 25px;
  border-radius: 50%;
  max-width: 30px;
  margin: 5px auto;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      ${(props) => props.theme.colors.primary.main}
        ${(props) => props.progress + "%"},
      grey 0
    );
`;

const TimerCircleGraphic = (props) => {
  const progress =
    ((props.startTime * 60 - props.timeRemaining) / (props.startTime * 60)) *
    100;

  return <CircleProgress progress={progress} />;
};

export default TimerCircleGraphic;
