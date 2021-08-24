import Task from './Task';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTasks } from '../store/action/apiAction'

function Tasks() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasksReducer.tasksList) 
  
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])
  
  return (
    <>
      {/* looping here, yang dilooping itu component Task 
        onDelete={onDelete} onToggle={onToggle}
      */}
      {tasks.map((task) => (
        // key beda sama props ya!
        <Task key={task.id} task={task} />
      ))}  
    </>
  )
}

export default Tasks
