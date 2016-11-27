import React from 'react';
import ValidateTask from './common-function';


const TodosListItem = ({ onClick, onDelete, onEdit,  completed, task, onSave, onCancel, isEditing, todo }) => {
  let input;
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
            <button onClick={() => onSave(todo.id, input.value )} >Save</button>
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
