import styled from 'styled-components';

const TaskList = styled.ul`
  width: 100%;
  list-style-type: none;
  li {
    width: 100%;
    padding: 15px 10px;
    background: #da5f5f;
    margin-bottom: 15px;
    box-shadow: 3px 3px 7px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: middle;
    transition: 0.4s;
      -webkit-transition: 0.4s;
      -moz-transition: 0.4s;
      -ms-transition: 0.4s;
      -o-transition: 0.4s;
    &:hover {
      transform: scale(1.03);
      transition: 0.4s;
      -webkit-transition: 0.4s;
      -moz-transition: 0.4s;
      -ms-transition: 0.4s;
      -o-transition: 0.4s;
    }
  }
  p {
    font-size: 18px;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #FFF;
    }
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
            <button onClick={() => {removeTask(task.id)}}><i class="fas fa-minus-circle"></i></button>
          </li>
        ))}
      </TaskList>
    </>
  )
}

export default Task;