import styled from 'styled-components';

import Task from './Task';

const GroupList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  max-width: 700px;
  .numOfTasks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767px) {
    margin-top: 20px;
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 28px;
    }
  }
`

const TaskGroup = (props) => {

  const { taskList, remove } = props;
  return (
    <>
      <GroupList>
        {taskList.length > 0 ? <div className="numOfTasks"><h2>Tasks</h2><p>{taskList.length}/15</p></div> : ""}
        <Task 
          tasks={taskList}
          removeTask={remove}
        />
      </GroupList>
    </>
  )
}

export default TaskGroup;