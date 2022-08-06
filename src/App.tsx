import React from 'react';
import Pomodoro from './components/Pomodoro/Pomodoro'
import TaskList from './components/tasks/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Productivity</h1>
      <div className="tasklist-component"><TaskList /></div>
      <div className="pomodoro-component"><Pomodoro /></div>
    </div>
  );
}

export default App;
