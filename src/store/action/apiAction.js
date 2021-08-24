const urlLocal = 'http://localhost:5000/tasks'

// Fetch Tasks
export const fetchTasks = () => {
  console.log('fetchTasks action ke panggil ni')
  return (dispatch) => {
    fetch(`${urlLocal}`, { method: 'GET' })
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_DATA_LIST',
          payload: res
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
      })
  } 
}

export const addTask = (task) => {
  return (dispatch) => {
    fetch(`${urlLocal}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'POST_DATA',
          payload: res
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
      })
  }
}

export const deleteTask = (task) => {
  return (dispatch) => {
    fetch(`${urlLocal}/${task.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        dispatch({
          type: 'DELETE_DATA',
          payload: task
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
      })
  }
}

export const toggleReminder = (task) => {
  return (dispatch) => {
    fetch(`${urlLocal}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'REMINDER',
          payload: task
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
      })
  }
  
}