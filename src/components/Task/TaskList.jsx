import { useEffect, useState } from "react";
//import { listTodos, createTodo, updateTodo, deleteTodo } from "../../graphql";

import TaskItem from "./TaskItem";
import AddTaskItem from "./AddTaskItem";
//import Box from "@mui/material/Box";
//import List from "@mui/material/List";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      //const taskData = await API.graphql(graphqlOperation(listTodos));
      //const tasks = taskData.data.listTodos.items;
      //setTasks(tasks);
    } catch (err) {
      console.log("Error fetching tasks.");
    }
  }

  async function addTaskItem(task) {
    try {
      //setTasks((prevTasks) => [...prevTasks, task]);
      //await API.graphql(graphqlOperation(createTodo, { input: task }));
    } catch (err) {
      console.log("Error creating todo:", err);
    }
  }

  async function updateTaskItem(selectedTask) {
    try {
      const newTasks = tasks.map((task) => {
        if (task.id === selectedTask.id) {
          return {
            ...selectedTask,
          };
        }
        return task;
      });

      setTasks(newTasks);

      /* await API.graphql(
        graphqlOperation(updateTodo, {
          input: {
            id: selectedTask.id,
            name: selectedTask.name,
            isComplete: selectedTask.isComplete,
          },
        })
      ); */
    } catch (err) {
      console.log("Error updating task:", err);
    }
  }

  async function deleteTaskItem(selectedTask) {
    try {
      const oldTask = tasks.filter((task) => {
        return task !== selectedTask;
      });

      setTasks(oldTask);

      /* await API.graphql(
        graphqlOperation(deleteTodo, { input: { id: selectedTask.id } })
      ); */
    } catch (err) {
      console.log("Error deleting todo:", err);
    }
  }

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem 1rem",
        border: "1px solid #d1d1d1",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <AddTaskItem addTaskItem={addTaskItem} />
      <ul
        sx={{
          width: "100%",
          margin: "0 2em",
          maxHeight: "300px",
          overflow: "auto",
        }}
        dense={true}
      >
        {tasks.map((task, i) => {
          return (
            <TaskItem
              key={i}
              task={task}
              updateTaskItem={updateTaskItem}
              deleteTaskItem={deleteTaskItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
