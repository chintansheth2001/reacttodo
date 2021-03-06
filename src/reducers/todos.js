const todo = (state = {} , action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        task:action.task,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        isEditing: true
      })
    case 'SAVE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        isEditing: false,
        task:action.task
      })

    case 'CANCEL_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        isEditing: false
      })

    default:
      return state
  }
}



const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action) )
    case 'DELETE_TODO':
      var a1 = [...state].filter(function(item) { return  item.id !== action.id; });
      return  a1;
    case 'EDIT_TODO':
      return state.map(t => todo(t, action))
    case 'SAVE_TODO':
      return state.map(t => todo(t, action))
    case 'CANCEL_TODO':
      return state.map(t => todo(t, action))
    case 'FETCH_TODO':
      return action.todos;
    default:
      return state
  }
}

export default todos
