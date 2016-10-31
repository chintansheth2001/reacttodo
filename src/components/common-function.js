import React from 'react';

const ValidateTask  = (task, todos) => {
  if(!task){
    return 'Please Enter Task'
  }else if( _.find(todos, todo => todo.task === task)){
    return 'Task already exists';
  }
  else{
    return null;
  }
}

ValidateTask.propTypes = {
  task: React.PropTypes.string.isRequired,
  todos: React.PropTypes.object.isRequired
};

export default ValidateTask;
