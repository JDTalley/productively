import React from 'react';
import Pomodoro from './components/Pomodoro/Pomodoro'
//import PomodoroTimer from './components/PomodoroTimer'
//import Timer from './components/Pomodoro/Timer'
import TaskList from './components/tasks/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Productivity</h1>
      <div className="pomodoro-component"><Pomodoro /></div>
      <TaskList />
    </div>
  );
}

export default App;
