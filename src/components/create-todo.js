import React from 'react';
import ValidateTask from './common-function';

const CreateTodo = ({onAdd}) => {
  let  addtodoinput;
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     error: null
  //   };
  // }
  // renderError(){
  //   if(!this.state.error){return null};
  //   return <div style={{color:'red'}}>{this.state.error}</div>
  // }
  // render(){
  return(
    <tr>
      <td>
        <input type="text" placeholder="What do I need to do?" ref={node => {addtodoinput = node; }} />
      </td>
      <td>
        <button onClick={() => onAdd(addtodoinput)}>Create</button>
      </td>
    </tr>
  )
  // }
  // handleCreate(event){
  //   event.preventDefault();
  //
  //   const createInput = this.refs.createInput;
  //   const task = createInput.value;
  //   const validateInput = ValidateTask(task, this.props.todos);
  //   if(validateInput){
  //     this.setState({ error: validateInput});
  //     return;
  //   }
  //   this.setState({ error: null});
  //   this.props.createTask(task);
  //   this.refs.createInput.value = '';
  // }
}

export default CreateTodo
