export interface PomodoroTimerType {
    remaining: number;
    interval: number;
    isActive: boolean;
    isBreak: boolean;
}

export interface PomodoroConfigType {
    length: number;
    interval: number;
    shortBreakLength: number;
    longBreakLength: number;
}