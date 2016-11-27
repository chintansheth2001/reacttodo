let nextTodoId = 4
export const addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    task: task
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const setShowError = (errorb) => {
  return {
    type: 'SET_SHOW_ERROR',
    errorb
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const editTodo = (id) => {
  return {
    type: 'EDIT_TODO',
    id
  }
}

export const saveTodo = (id, task) => {
  return {
    type: 'SAVE_TODO',
    id,
    task
  }
}

export const cancelTodo = (id) => {
  return {
    type: 'CANCEL_TODO',
    id
  }
}
