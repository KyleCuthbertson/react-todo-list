import styled from 'styled-components';

const TaskList = styled.ul`
  width: 100%;
  list-style-type: none;
  li {
    width: 100%;
    padding: 10px 0;
    
  }
`

const Task = (props) => {

  const {tasks, removeTask} = props;

  console.log(removeTask);
  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
            <button onClick={() => {removeTask(task.id)}}>Delete</button>
          </li>
        ))}
      </TaskList>
    </>
  )
}

export default Task;