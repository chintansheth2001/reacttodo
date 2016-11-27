import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import showError from './showError'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  showError
})

export default todoApp
