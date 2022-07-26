import React from 'react';
import PomodoroTimer from './components/PomodoroTimer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Productivity</h1>
      <div className="pomodoro-component"><PomodoroTimer /></div>
    </div>
  );
}

export default App;
