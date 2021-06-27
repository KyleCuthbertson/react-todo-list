import styled from 'styled-components';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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
    word-break: break-all;
  }
  button {
    border: 0;
    background: none;
    padding-left: 5px;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #FFF;
    }
  }
`

const Task = (props) => {

  const {tasks, removeTask} = props;

  return (
    <>
      <TransitionGroup component={TaskList}>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={300} classNames="transition">
            <li key={task.id}>
              <p>{task.name}</p>
              <button onClick={() => {removeTask(task.id)}}><i className="fas fa-minus-circle"></i></button>
            </li>
          </CSSTransition>
        ))}
    </TransitionGroup>
  
    </> 
  )
}

export default Task;