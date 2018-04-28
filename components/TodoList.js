import React, { Component } from 'react';
import Todo from './Todo';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class TodoList extends Component {
  render() {
    return (
      <List>
        <Subheader>Todo List</Subheader>
        {
          this.props.todo_list.map(todo => {
            return (
              <Todo todo={todo} key={todo.id} toggleTask={this.props.toggleTask} />
            )
          })
        }
      </List>
    )
  }
}
