import _ from 'lodash';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, editTodo, cancelTodo, saveTodo  } from '../actions'
import TodoList from '../components/todos-list'

const getVisibleTodos = (todos, filter) => {
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return todos
  //   case 'SHOW_COMPLETED':
  //     return todos.filter(t => t.completed)
  //   case 'SHOW_ACTIVE':
  //     return todos.filter(t => !t.completed)
  // }


  // _.map(todos, (todo, index) => (
  //   todo.isCompleted = false
  // ))
  // console.log(todos)

  return todos
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (task) => {
      dispatch(addTodo(task))
    },
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
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
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
