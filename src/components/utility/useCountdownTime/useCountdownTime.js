import React from "react";

// Creates a countdown timer
function useCountdownTime({ seconds }) {
  const [timeRemaining, setTimeRemaining] = React.useState(seconds);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return timeRemaining;
}

export default useCountdownTime;
