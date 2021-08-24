import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleReminder } from '../store/action/apiAction'

function Task({ task }) {
  const dispatch = useDispatch()
  // console.log(task, 'task gitulo')
  const updTask = {...task, reminder: !task.reminder}
  // console.log(updTask, 'update', updTask.id)
  return (
    <div 
      className={`task ${task.reminder ? 'reminder' : ''}`} 
      onDoubleClick={() => dispatch(toggleReminder(updTask))}
    >
      {/* 
        onDoubleClick={() => onToggle(task.id)}
        onClick={() => onDelete(task.id)} 
      */}
      
      <h3>
        {task.text} 
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => dispatch(deleteTask(task))}
        /> 
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
