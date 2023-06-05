import Pomodoro from "./components/Pomodoro";
import TaskList from "./components/Task/TaskList";

import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  const theme = {
    colors: {
      grayscale: {
        light: "hsl(0, 0%, 35%)",
        main: "hsl(0, 0%, 18%)",
        dark: "hsl(0, 0%, 2%)",
        contrast: "hsl(0, 0%, 90%)",
      },
      primary: {
        light: "hsl(205, 62%, 70%)",
        main: "hsl(205, 62%, 49%)",
        dark: "hsl(205, 62%, 29%)",
        contrast: "hsl(0, 0%, 18%)",
      },
    },
    fonts: {
      sans: '"Montserrat", sans-serif',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <TaskList /> */}
        <Pomodoro />
      </div>
    </ThemeProvider>
  );
}

export default App;
