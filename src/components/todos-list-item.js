import React from 'react';
import ValidateTask from './common-function';


const TodosListItem = ({ onClick, onDelete, onEdit,  isCompleted, task, onSave, onCancel, isEditing, todo }) => {
  let input;
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isEditing: false,
  //     error: null
  //   };
  // }
  // renderError(){
  //   if(!this.state.error){return null};
  //   return <div style={{color:'red'}}>{this.state.error}</div>
  // }
  // renderTaskSection(){
  //   console.log(this.props)
  //   const {id, task, isCompleted} = this.props;
  //
  //   const taskStyle ={
  //     color:isCompleted ? 'green' : 'red',
  //     cursor:'pointer'
  //   }
  //   if(this.state.isEditing){
  //     return(
  //       <td>
  //         <form onSubmit={this.onSaveClick.bind(this)}>
  //           <input type="text" defaultValue={task} ref="editInput" />
  //           {this.renderError()}
  //         </form>
  //       </td>
  //     );
  //   }
  //   return(
  //     <td style={taskStyle}
  //         onClick="{this.props.toggleTask.bind(this, task)}"
  //     >
  //       {task}--
  //       {id}
  //     </td>
  //   );
  // }
  // renderActionsSection(){
  //   if(this.state.isEditing){
  //     return(
  //       <td>
  //         <button onClick={this.onSaveClick.bind(this)} >Save</button>
  //         <button onClick={this.onCancelClick.bind(this)} >Cancel</button>
  //       </td>
  //     );
  //
  //   }
  //   return(
  //     <td>
  //       <button onClick={this.onEditClick.bind(this)}>Edit</button>
  //       <button onClick="{this.props.deleteTask.bind(this, this.props.task)}">Delete</button>
  //     </td>
  //   );
  // }
  // render(){
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
            style={{textDecoration: isCompleted ? 'line-through' : 'none', cursor:'pointer'}}
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
  // }
  // onEditClick(){
  //   this.setState({ isEditing: true});
  // }
  // onCancelClick(){
  //   this.setState({ isEditing: false});
  //   this.setState({ error: null});
  // }
  // onSaveClick(event){
  //   event.preventDefault();
  //   const oldTask = this.props.task;
  //   const newTask = this.refs.editInput.value;
  //
  //   const validateInput = ValidateTask(newTask, this.props.todos);
  //   if(validateInput){
  //     this.setState({ error: validateInput});
  //     return;
  //   }
  //   this.props.saveTask(oldTask,newTask);
  //   this.setState({isEditing :false});
  //   this.setState({ error: null});
  // }
}




export default TodosListItem
