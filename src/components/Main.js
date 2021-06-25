import { useState } from 'react';

import styled from 'styled-components';
import InputField from './InputField';
import TaskGroup from './TaskGroup';


const InputArea = styled.div`
  width: 100%;
  padding: 40px 5px;
  text-align: center;
  box-sizing: border-box;
`

const Main = () => {

  const [tasks, setTasks] = useState([{
      name: "Study",
      id: 1
    },
    {
      name: "Get Milk & Bread",
      id: 2
    },
    {
      name: "Meal Prep",
      id: 3
    },
    {
      name: "Clean the house",
      id: 4
    }
  ]);

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
  }

  // Add task to list
  const addTask = (value) => {
    setTasks(value);
  }

  const removeTask = (id) => {
    const newTaskList = [...tasks].filter(task => {
      return task.id !== id;
    })

    setTasks(newTaskList);
  }

  return (
    <>
      <InputArea>
        <InputField 
          submit={handleSubmit}
          add={addTask}
          remove={removeTask}
        />
      </InputArea>

      <TaskGroup
        taskList={tasks}
        remove={removeTask}
      />
    </>
  )
}

export default Main;