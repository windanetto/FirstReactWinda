import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import tasksReducer from './reducer/tasksReducer'
import thunk from 'redux-thunk' 

const rootReducer = combineReducers({
  tasksReducer
})

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store