import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component{
  renderItem(){
    const  props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} todos={this.props.todos} />)
  }
  render(){
    return(
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItem()}
        </tbody>
      </table>
    );
  }
}
