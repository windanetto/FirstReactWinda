const initiate = {
  tasksList: []
}

const tasksReducer = (state = initiate, action) => {
  switch (action.type) {
    case 'FETCH_DATA_LIST':
      return {...state, tasksList: action.payload}
    case 'POST_DATA':
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      }
    case 'DELETE_DATA':
      return {
        ...state, 
        tasksList: state.tasksList.filter(task => task !== action.payload)
      }
    case 'REMINDER':
      return {
        ...state, 
        tasksList: state.tasksList.map(task =>
          (task.id === action.payload.id) ? {...task, reminder: action.payload.reminder } : task
        )
      }
    default:
      break;
  }

  return state
}

export default tasksReducer