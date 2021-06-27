import { useState } from 'react';

import styled from 'styled-components';
import InputField from './InputField';
import TaskGroup from './TaskGroup';
import AddButton from './AddButton';


const InputArea = styled.div`
  width: 100%;
  padding: 40px 5px 20px 5px;
  text-align: center;
  box-sizing: border-box;
  max-width: 700px;
`

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 15px 0;
  background: #701e1e;
  color: #FFF;
  i {
    font-size: 24px;
    padding-right: 7px;
  }
`

const Main = () => {

  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false);

  // Add task to list
  const addTask = (event) => {
    event.preventDefault();
    let inputValue = document.querySelector("#taskinput").value;
    console.log(inputValue.length);
    if (inputValue !== "" || inputValue.length !== 0) {
      const timestamp = Date.now();
      setTasks([
        ...tasks, 
        {
          name: inputValue,
          id: timestamp
        }
    ]);
    document.querySelector("form").reset();
    setIsError(false);
    } else {
      setIsError(true);
      setTimeout(function() { // Timeout for error message to show
        setIsError(false);
      }, 4000);
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
      
      {
        isError ? 
        <ErrorText>
          <i class="fas fa-exclamation-circle"></i>
          <p>Can't leave this empty!</p>
        </ErrorText> 
        : 
        ""
      }

      <TaskGroup
        taskList={tasks}
        remove={removeTask}
      />
    </>
  )
}

export default Main;