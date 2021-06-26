import styled from 'styled-components';
import Task from './Task';

const GroupList = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  max-width: 700px;
  h2 {
    padding-bottom: 15px;
  }
`

const TaskGroup = (props) => {

  const { taskList, remove } = props;
  return (
    <>
      <GroupList>
        <h2>Tasks</h2>
        <Task 
          tasks={taskList}
          removeTask={remove}
        />
      </GroupList>
    </>
  )
}

export default TaskGroup;