import axios from 'axios'


export const addTodo = (task, nextTodoId) => {
  let nextTodoId1 = nextTodoId+1; 
  
  axios.post('http://0.0.0.0:3000/api/todos', {task: task })
  .then(function(response){
    console.log('Save successfully')
  });  
  return {
    type: 'ADD_TODO',
    id: nextTodoId1,
    task: task
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const fetchTodos = (todos) => {
  return {
    type:'FETCH_TODO',
    todos
  }
}

export const setShowError = (errorb) => {
  return {
    type: 'SET_SHOW_ERROR',
    errorb
  }
}

export const toggleTodo = (todo) => {
  axios.post('http://0.0.0.0:3000/api/todos/'+todo.id+'/replace', {task: todo.task, completed:!todo.completed })
  .then(function(response){
    console.log('Save successfully')
  });  

  return {
    type: 'TOGGLE_TODO',
    id: todo.id
  }
}

export const deleteTodo = (id) => {
  axios.delete('http://0.0.0.0:3000/api/todos/'+id)
  .then(function(response){
    console.log('Delete successfully')
  });  
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
  axios.post('http://0.0.0.0:3000/api/todos/'+id+'/replace', {task: task })
  .then(function(response){
    console.log('Save successfully')
  });  

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
