import { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listTodos, createTodo, updateTodo, deleteTodo } from '../../graphql';

import { TaskType } from '../interfaces/taskList.interface';
import TaskItem from './TaskItem';
import AddTaskItem from './AddTaskItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import awsExports from '../../aws-exports'
Amplify.configure(awsExports);

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        fetchTasks()
    }, []);

    async function fetchTasks() {
        try {
            const taskData = (
                await API.graphql(graphqlOperation(listTodos))
            ) as any;
            const tasks = taskData.data.listTodos.items;
            setTasks(tasks);
        } catch (err) { console.log('Error fetching tasks:', err)};
    }

    async function addTaskItem(task: TaskType) {
        try {
            const taskData = (
                await API.graphql(graphqlOperation(createTodo, {input: task}))
            ) as any;

            const newTask = taskData.data.createTodo;

            setTasks(prevTasks => [
                ...prevTasks,
                newTask,
            ]);

        } catch (err) {
            console.log('Error creating todo:', err)
        }
    }

    async function updateTaskItem(selectedTask: TaskType) {
        try {
            const newTasks = tasks.map((task) => {
                if (task.id === selectedTask.id) {
                    return {
                        ...selectedTask
                    };
                }
                return task;
            });

            setTasks(newTasks);

            await API.graphql(graphqlOperation(updateTodo, {input: {id: selectedTask.id, name: selectedTask.name, isComplete: selectedTask.isComplete}}));
        } catch(err) {
            console.log('Error updating task:', err);
        }
    }

    async function deleteTaskItem(selectedTask: TaskType) {
        try {
            const oldTask = tasks.filter((task) => {
                return task !== selectedTask;
            });
    
            setTasks(oldTask);

            await API.graphql(graphqlOperation(deleteTodo, {input: {id: selectedTask.id}}));
        } catch (err) {
            console.log('Error deleting todo:', err);
        }
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
                            updateTaskItem={updateTaskItem}
                            deleteTaskItem={deleteTaskItem} />
                    )
                })}
            </List>
        </Box>
    )
}

export default TaskList