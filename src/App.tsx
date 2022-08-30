import Pomodoro from './components/Pomodoro/Pomodoro'
import TaskList from './components/Task/TaskList';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/private-theming/ThemeProvider';
import './App.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

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
      <Authenticator variation='modal'>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <Container sx={{display: 'flex', justifyContent: 'space-around',}}>
              <TaskList />
              <Pomodoro />
            </Container>
          </main>
          
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
