let nextTodoId = 4
export const addTodo = (addtodoinput) => {
  let task = addtodoinput.value
  addtodoinput.value = '';
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    task: task
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
