import { useState } from "react";
//import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";

const AddTaskItem = (props) => {
  const [itemTemp, setItemTemp] = useState({
    name: "",
    description: "",
    isComplete: false,
  });

  //const [isActive, setIsActive] = useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();

    setItemTemp({
      name: e.target.value,
      description: "",
      isComplete: false,
    });
  };

  const handleAddTask = (e) => {
    if (e.key === "Enter") {
      props.addTaskItem(itemTemp);

      setItemTemp({
        name: "",
        description: "",
        isComplete: false,
      });
    }
  };

  /* const handleAddTaskButton = (e: React.ChangeEvent<any>) => {
        setIsActive(!isActive);
    } */

  return (
    <div
      sx={{
        //display: 'flex',
        //padding: '0 .5em',
        width: "100%",
      }}
    >
      <div
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: ".5em 0",
        }}
      >
        <input
          label="Enter Task"
          variant="standard"
          fullWidth={true}
          margin="none"
          InputLabelProps={{ sx: { padding: "0 .5em" } }}
          InputProps={{ sx: { padding: "0 .5em" } }}
          value={itemTemp.name}
          onChange={handleNameChange}
          onKeyPress={handleAddTask}
        />
        {/* <Button variant="contained" onClick={handleAddTaskButton}>Finish</Button> */}
      </div>
      {/* <Box sx={{display: 'flex', width: '100%', justifyContent: 'end',}}>
                <Button 
                variant="contained" onClick={handleAddTaskButton}>Add Task</Button>
            </Box> */}
    </div>
  );
};

export default AddTaskItem;
