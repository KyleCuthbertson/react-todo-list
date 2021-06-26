import { useState } from 'react';

import styled from 'styled-components';
import InputField from './InputField';
import TaskGroup from './TaskGroup';
import AddButton from './AddButton';


const InputArea = styled.div`
  width: 100%;
  padding: 40px 5px;
  text-align: center;
  box-sizing: border-box;
  max-width: 700px;
`

const Main = () => {

  const [tasks, setTasks] = useState([]);


  // Add task to list
  const addTask = (event) => {
    event.preventDefault();
    let inputValue = document.querySelector("#taskinput").value;
    console.log(inputValue.length);
    if (inputValue !== "" || inputValue !== null || inputValue.length !== 0) {
      const timestamp = Date.now();
      setTasks([
        ...tasks, 
        {
          name: inputValue,
          id: timestamp
        }
    ]);
    document.querySelector("form").reset();
    inputValue = ""; // Clears input field
    } else {
      alert("Please enter value");
    }
  }

  // Removes task from list
  const removeTask = (id) => {
    const newTaskList = [...tasks].filter(task => {
      return task.id !== id;
    })
    setTasks(newTaskList);
  }

  return (
    <>
      <form className="form" onSubmit={addTask}>
        <InputArea>
          <InputField/>
          <AddButton 
            add={addTask}
          />
        </InputArea>
      </form>

      <TaskGroup
        taskList={tasks}
        remove={removeTask}
      />
    </>
  )
}

export default Main;