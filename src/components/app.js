import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';


const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false,
    isEditing: false,
    error: null
  }
];
const App = () => (
  <div>
    <h1>React ToDos App</h1>
    <VisibleTodoList />
  </div>
)
export default App

//
// <TodosList
//   todos={this.state.todos}
//   toggleTask={this.toggleTask.bind(this)}
//   saveTask={this.saveTask.bind(this)}
//   deleteTask={this.deleteTask.bind(this)}
// />
