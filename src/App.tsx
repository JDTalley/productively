import React from 'react';
import Pomodoro from './components/Pomodoro/Pomodoro'
//import PomodoroTimer from './components/PomodoroTimer'
//import Timer from './components/Pomodoro/Timer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Productivity</h1>
      <div className="pomodoro-component"><Pomodoro /></div>
      {/* <div><Timer 
        timeRemaining={30}
        isActive={false} /></div> */}
    </div>
  );
}

export default App;
