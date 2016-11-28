import React from 'react';
import ValidateTask from './common-function';


const TodosListItem = ({ setShowError, onClick, onDelete, onEdit,  completed, task, onSave, onCancel, isEditing, todo, todos }) => {
  let input;

  let onSaveCheck = () => {

    let matchTodo = todos.filter( t => input.value == t.task )
    if(matchTodo.length > 0){
      setShowError(true)
    }
    else{
      onSave(todo.id, input.value )
      setShowError(false)
    }

  }


      return(
        <tr>
          {isEditing ?
            <td>
            <form onSubmit="">
              <input type="text" defaultValue={task}  ref={node => {input = node; }} />
            </form>
            </td>
          : <td
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none', cursor:'pointer'}}
          >
            {task}

          </td>
          }

          {isEditing ?
          <td>
            <button onClick={() => onSaveCheck()} >Save</button>
            <button onClick={onCancel}>Cancel</button>
          </td>
          :
            <td>
              <button onClick={onEdit}>Edit</button>
              <button onClick={onDelete}>Delete</button>
            </td>
          }
        </tr>
      );
}




export default TodosListItem
