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
        {state.showError ? <div style={ {color:'red'} }>Alread entered</div> : <div></div>}
      </form>
    </div>
  )

}

function mapStateToProps(state) {
  return { state: state }
}


AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
