import React from 'react';
import Pomodoro from './components/Pomodoro/Pomodoro'
import TaskList from './components/Task/TaskList';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/private-theming/ThemeProvider';
import './App.css';

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        light: '#585858',
        main: '#2f2f2f',
        dark: '#050505',
        contrastText: '#e6e6e6',
      },
      secondary: {
        light: '#6cb9fc',
        main: '#2f89c9',
        dark: '#005c98',
        contrastText: '#2f2f2f',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{display: 'flex', justifyContent: 'space-around',}}>
        <TaskList />
        <Pomodoro />
      </Container>
    </ThemeProvider>
  );
}

export default App;
