import React, { useState } from "react";
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = (props) => {
  const [tempName, setTempName] = useState(props.task.name);
  const [isEditable, setIsEditable] = useState(false);

  const handleCheckboxChange = () => {
    if (!isEditable) {
      props.updateTaskItem({
        ...props.task,
        isComplete: !props.task.isComplete,
      });
    }
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleDeleteClick = () => {
    props.deleteTaskItem(props.task);
  };

  const handleNameChange = (e) => {
    setTempName(e.target.value);

    props.updateTaskItem({
      ...props.task,
      name: e.target.value,
    });
  };

  return (
    <li
      secondaryAction={
        <div>
          <button onClick={handleEditClick}>
            <div />
          </button>
          <button onClick={handleDeleteClick}>
            <div />
          </button>
        </div>
      }
    >
      <button onClick={handleCheckboxChange}>
        {isEditable ? (
          <input
            id="filled-basic"
            label="Enter Task"
            variant="standard"
            value={tempName}
            onChange={handleNameChange}
          />
        ) : (
          <>
            <input checked={props.task.isComplete} />
            <p primary={props.task.name} />
          </>
        )}
      </button>
    </li>
  );
};

export default TaskItem;
