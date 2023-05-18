import React from "react";
//import Box from "@mui/material/Box";
//import CircularProgress from '@mui/material/CircularProgress';

const TimerCircleGraphic = (props) => {
  const progress =
    ((props.startTime * 60 - props.timeRemaining) / (props.startTime * 60)) *
    100;

  return (
    <div sx={{ position: "relative" }}>
      <div
        sx={{ margin: "2rem", color: "#e6e6e6" }}
        size="5rem"
        variant="determinate"
        value={100}
      />
      <div
        sx={{ margin: "2rem", position: "absolute", left: 0 }}
        size="5rem"
        variant="determinate"
        value={progress}
      />
    </div>
  );
};

export default TimerCircleGraphic;
