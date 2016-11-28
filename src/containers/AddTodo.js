import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setShowError } from '../actions'

let AddTodo = ({ dispatch, state }) => {


  let input
  let errorMessage


  let onAddTodo = () =>{
    let matchTodo = state.todos.filter( t => input.value == t.task )
    if(matchTodo.length > 0){
      dispatch(setShowError(true))
    }
    else{
      dispatch( addTodo(input.value) )
      dispatch(setShowError(false))
      input.value = ''
    }
  }

  return (
    <div>
      {state.showError ? <h2 style={ {color:'red'} }>Already entered</h2> : <div></div>}

      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          {onAddTodo()}
        }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )

}

function mapStateToProps(state) {
  return { state: state }
}


AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
