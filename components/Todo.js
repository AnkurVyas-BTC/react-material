import React, { Component } from 'react';
import ListItem from 'material-ui/List/ListItem';
import Checkbox from 'material-ui/Checkbox';

export default class Todo extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <ListItem
        primaryText={todo.name}
        leftCheckbox={
          <Checkbox
            checked={todo.completed}
            onClick={() => { this.props.toggleTask(todo.id) }}
          />
        }
      />
    )
  }
}