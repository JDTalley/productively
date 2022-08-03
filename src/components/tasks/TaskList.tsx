import { useState } from 'react';
import { TaskType } from '../interfaces/taskList.interface';
import TaskItem from './TaskItem';
import AddTaskItem from './AddTaskItem'

function TaskList() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const addTaskItem = (task: TaskType) => {
        setTasks(prevTasks => [
            ...prevTasks,
            task,
          ])
    }

    const toggleComplete = (selectedTask: TaskType) => {
        const newTasks = tasks.map((task) => {
            if (task === selectedTask) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                };
            }
            return task;
        });

        setTasks(newTasks);
    }

    return (
        <div>
            <AddTaskItem addTaskItem={addTaskItem} />
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.description} task={task} toggleComplete={toggleComplete} />
                )
            })}
        </div>
    )
}

export default TaskList