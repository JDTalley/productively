import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export interface Props {
    addTaskItem: Function
};

const AddTaskItem: React.FC<Props> = (props) => {
    const [itemTemp, setItemTemp] = useState({
        description: '',
        isComplete: false
    });

    //const [isActive, setIsActive] = useState(false);

    const handleDescriptionChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setItemTemp({
            description: e.target.value,
            isComplete: false
        });
    };

    const handleAddTask = (e: React.KeyboardEvent<any>) => {
        if (e.key === 'Enter') {
            props.addTaskItem(itemTemp);

            setItemTemp({
                description: '',
                isComplete: false
            });
        }
    };

    /* const handleAddTaskButton = (e: React.ChangeEvent<any>) => {
        setIsActive(!isActive);
    } */

    return (
        <Box sx={{
            //display: 'flex',
            //padding: '0 .5em',
            width: '100%',
        }}>
            <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', padding: '.5em 0'}}>
                <TextField 
                label="Enter Task" 
                variant="standard" 
                fullWidth={true}
                margin="none"
                InputLabelProps={{sx:{padding: '0 .5em'}}}
                InputProps={{sx:{padding: '0 .5em'}}}
                value={itemTemp.description} 
                onChange={handleDescriptionChange}
                onKeyPress={handleAddTask} />
                {/* <Button variant="contained" onClick={handleAddTaskButton}>Finish</Button> */}
            </Box>
            {/* <Box sx={{display: 'flex', width: '100%', justifyContent: 'end',}}>
                <Button 
                variant="contained" onClick={handleAddTaskButton}>Add Task</Button>
            </Box> */}
        </Box>
             
    )
};

export default AddTaskItem;