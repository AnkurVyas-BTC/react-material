import React, { Component } from 'react';
import ListItem from 'material-ui/List/ListItem';
import Checkbox from 'material-ui/Checkbox';
import { green500, red500 } from 'material-ui/styles/colors';

export default class Todo extends Component {
  render() {
    const todo = this.props.todo;
    const color = todo.completed ? green500 : red500; 
    return (
      <ListItem
        primaryText={todo.name}
        style={{color: color}}
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