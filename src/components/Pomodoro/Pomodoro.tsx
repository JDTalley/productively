import React, { useEffect, useState } from 'react';
import PomodoroTimer from './PomodoroTimer';

function Pomodoro() {
    // States
    const [pomodoroTimer, setPomodoroTimer] = useState({
        timerRemaining: 1500, // default 25min pomodoro
        timerInterval: 1, // default 1st pomodoro
        timerActive: false, // default timer paused
        timerBreak: false // default nonbreak
    });
    const [pomodoroConfig, setPomodoroConfig] = useState({
        configLength: 25, // default 25min pomodoro
        configInterval: 4, // default 4 pomodoros to long break
        configShortLength: 5, // default 5min short break
        configLongLength: 15 // default 5min short break
    });
    const [pomodoroConfigTemp, setPomodoroConfigTemp] = useState({
        tempLength: 25, 
        tempInterval: 4, 
        tempShortLength: 5, 
        tempLongLength: 15 
    });

    return (
        <div>
            <PomodoroTimer 
                pomodoroTimer={pomodoroTimer}
                pomodoroConfig={pomodoroConfig}
                setPomodoroTimer={setPomodoroTimer} />
        </div>
    )
}

export default Pomodoro;