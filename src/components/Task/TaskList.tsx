import { useState } from 'react';
import { TaskType } from '../interfaces/taskList.interface';
import TaskItem from './TaskItem';
import AddTaskItem from './AddTaskItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function TaskList() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const addTaskItem = (task: TaskType) => {
        setTasks(prevTasks => [
            ...prevTasks,
            task,
          ])
    }

    const deleteTaskItem = (selectedTask: TaskType) => {
        const newTasks = tasks.filter((task) => {
            return task !== selectedTask;
        });

        setTasks(newTasks);
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
        <Box 
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '2rem 1rem',
            border: '1px solid #d1d1d1',
            borderRadius: '10px',
            overflow: 'hidden',

        }}>
            <AddTaskItem addTaskItem={addTaskItem} />
            <List sx={{width: '100%', margin: '0 2em',maxHeight: '300px', overflow: 'auto',}} dense={true}>
                {tasks.map((task, i) => {
                    return (
                        <TaskItem 
                            key={i} 
                            task={task} 
                            toggleComplete={toggleComplete}
                            deleteTaskItem={deleteTaskItem} />
                    )
                })}
            </List>
        </Box>
    )
}

export default TaskList