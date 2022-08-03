import React from 'react';
import { TaskType } from '../interfaces/taskList.interface';

export interface Props {
    task: TaskType,
    toggleComplete: Function
};

const TaskItem: React.FC<Props> = (props) => {
    const handleCheckboxChange = () => {
        props.toggleComplete(props.task);
    };

    return (
        <div>
            <label>
                <input 
                    type='checkbox'
                    checked={props.task.isComplete}
                    onChange={handleCheckboxChange}
                />
                {props.task.description}
            </label>
        </div>
    )
};

export default TaskItem;