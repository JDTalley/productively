import React, { useState } from 'react';
import { TaskType } from '../interfaces/taskList.interface';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export interface Props {
    task: TaskType,
    updateTaskItem: Function,
    deleteTaskItem: Function
};

const TaskItem: React.FC<Props> = (props) => {
    const [tempName, setTempName] = useState(props.task.name);
    const [isEditable, setIsEditable] = useState(false);

    const handleCheckboxChange = () => {
        if (!isEditable) {
            props.updateTaskItem({
                ...props.task,
                isComplete: !props.task.isComplete
            });
        }
    };

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    }

    const handleDeleteClick = () => {
        props.deleteTaskItem(props.task);
    };

    const handleConfirmClick = () => {
        props.updateTaskItem({
            ...props.task,
            name: tempName
        });

        setIsEditable(!isEditable);
    }

    const handleKeyPress = (e: React.KeyboardEvent<any>) => {
        if (e.key === 'Enter') {
            setIsEditable(!isEditable);

            props.updateTaskItem({
                ...props.task,
                name: tempName
            });
        }
    }

    const handleCancelClick = () => {
        setTempName(props.task.name);

        setIsEditable(!isEditable);
    }

    const handleNameChange = (e: React.ChangeEvent<any>) => {
        setTempName(e.target.value);
    };

    return (
        <ListItem
            secondaryAction={
                <ButtonGroup>
                    {isEditable
                        ?   <ButtonGroup>
                                <IconButton onClick={handleConfirmClick}>
                                    <CheckCircleIcon />  
                                </IconButton>
                                <IconButton onClick={handleCancelClick}>
                                    <CancelIcon /> 
                                </IconButton>
                            </ButtonGroup>
                        :   <ButtonGroup>
                                <IconButton onClick={handleEditClick}>
                                    <EditIcon />  
                                </IconButton>
                                <IconButton onClick={handleDeleteClick}>
                                    <DeleteIcon /> 
                                </IconButton>
                            </ButtonGroup>
                        }
                </ButtonGroup>
            }>
            <ListItemButton onClick={handleCheckboxChange}>
                {isEditable
                    ? <TextField 
                        id="filled-basic" 
                        label="Enter Task" 
                        variant="standard" 
                        value={tempName} 
                        onChange={handleNameChange}
                        onKeyPress={handleKeyPress}
                        />
                    : 
                    <>
                        <Checkbox checked={props.task.isComplete} />
                        <ListItemText primary={props.task.name} /> 
                    </>
                }
            </ListItemButton>
        </ListItem>
    )
};

export default TaskItem;