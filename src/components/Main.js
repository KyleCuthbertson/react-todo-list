import { useState } from 'react';

import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import InputField from './InputField';
import TaskGroup from './TaskGroup';
import AddButton from './AddButton';


const InputArea = styled.div`
  width: 100%;
  padding: 40px 5px 20px 5px;
  text-align: center;
  box-sizing: border-box;
  max-width: 700px;
  margin: 0 auto;
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
    if (inputValue !== "" || inputValue.length !== 0) {
      const timestamp = Date.now();
      setTasks([
        {
          name: inputValue,
          id: timestamp
        },
        ...tasks
    ]);
    document.querySelector("form").reset();
    setIsError(false);
    } else {
      setIsError(true);
      setTimeout(function() { // Timeout for error message to show
        setIsError(false);
      }, 3000);
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
      
      
      <CSSTransition in={isError} timeout={750} classNames="transition" unmountOnExit={true}>
        <ErrorText>
          <i className="fas fa-exclamation-circle"></i>
          <p>Can't leave this empty!</p>
        </ErrorText> 
      </CSSTransition>
    

      <TaskGroup
        taskList={tasks}
        remove={removeTask}
      />
    </>
  )
}

export default Main;