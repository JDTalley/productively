import React, { useState } from 'react';

export interface Props {
    addTaskItem: Function
};

const AddTaskItem: React.FC<Props> = (props) => {
    const [itemTemp, setItemTemp] = useState({
        description: '',
        isComplete: false
    });

    const handleDescriptionChange = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setItemTemp({
            description: e.target.value,
            isComplete: false
        });
    };

    const handleAddTaskItem = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        props.addTaskItem(itemTemp);

        setItemTemp({
            description: '',
            isComplete: false
        });

        //document.querySelector('.pomodoro-timer')?.classList.toggle('hidden');
        //document.querySelector('.timer-config')?.classList.toggle('hidden');
    };

    return (
        <div>
            <label className="add-task-description-label">New Task Description
                <input 
                    className="add-task-description-input"
                    type="string"
                    value={itemTemp.description} 
                    onChange={handleDescriptionChange} />
            </label>
            <button onClick={handleAddTaskItem}>Add Task</button>
        </div>
    )
};

export default AddTaskItem;