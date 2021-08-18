import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* looping here, yang dilooping itu component Task */}
      {tasks.map((task) => (
        // key beda sama props ya!
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}  
    </>
  )
}

export default Tasks
