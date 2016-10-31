import React from 'react';
import ValidateTask from './common-function';

export default class TodosList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null
    };
  }
  renderError(){
    if(!this.state.error){return null};
    return <div style={{color:'red'}}>{this.state.error}</div>
  }
  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
  handleCreate(event){
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = ValidateTask(task, this.props.todos);
    if(validateInput){
      this.setState({ error: validateInput});
      return;
    }
    this.setState({ error: null});
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }
}
