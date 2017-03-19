import _ from 'lodash';
import { connect } from 'react-redux'
import { setShowError, toggleTodo, deleteTodo, editTodo, cancelTodo, saveTodo  } from '../actions'
import TodoList from '../components/todos-list'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (todo) => {
      dispatch(toggleTodo(todo))
    },
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id))
    },
    onEditClick: (id) => {
      dispatch(editTodo(id))
    },
    onSaveClick: (id,task) => {
      dispatch(saveTodo(id,task))
    },
    onCancelClick: (id) => {
      dispatch(cancelTodo(id))
    },
    onsetShowError: (errorb) => {
      dispatch(setShowError(errorb))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
