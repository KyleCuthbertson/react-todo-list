import styled from 'styled-components';
import Task from './Task';

const GroupList = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px 20px;
  box-sizing: border-box;
  p {
    font-size: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000;
  }
`

const TaskGroup = (props) => {

  const { taskList, remove } = props;
  return (
    <>
      <GroupList>
        <p>Tasks:</p>
        <Task 
          tasks={taskList}
          removeTask={remove}
        />
      </GroupList>
    </>
  )
}

export default TaskGroup;