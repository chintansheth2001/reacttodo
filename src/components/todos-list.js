import _ from 'lodash';
import React from 'react';
import CreateTodo from './create-todo';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


const TodosList = ({todos, onAddClick, onTodoClick, onDeleteClick, onEditClick, onSaveClick, onCancelClick}) => {
  return(
    <table>
      <TodosListHeader />
      <tbody>
        <CreateTodo onAdd={onAddClick}  />
        {todos.map( todo => <TodosListItem
          key={todo.id}
          {...todo}
          todo={todo}
          onClick={() => onTodoClick(todo.id)}
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
