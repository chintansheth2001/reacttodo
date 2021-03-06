import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


const TodosList = ({todos, onsetShowError, onAddClick, onTodoClick, onDeleteClick, onEditClick, onSaveClick, onCancelClick}) => {
  return(
    <table>
      <TodosListHeader />
      <tbody>
        {todos.map( todo => <TodosListItem
          key={todo.id}
          {...todo}
          todos={todos}
          setShowError={onsetShowError}
          todo={todo}
          onClick={() => onTodoClick(todo)}
          onDelete={() => onDeleteClick(todo.id)}
          onEdit={() => onEditClick(todo.id)}
          onSave={onSaveClick}
          onCancel={() => onCancelClick(todo.id)}
        />)}
      </tbody>
    </table>
  )
}

export default TodosList
