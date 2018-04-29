import React, { Component } from 'react';
import InputTask from '../components/InputTask';
import TodoList from '../components/TodoList';
import { setTaskName, addTask, toggleTask } from '../actions/todo';
import { setMessage } from '../actions/snackbar';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import Navigation from '../containers/Navigation';
import { Chart } from 'react-google-charts';
import { GridList } from 'material-ui';

class Todo extends Component {
  _onChange = (value) => {
    this.props.dispatch(setTaskName(value));
  }

  _onAddTaskClick = (e) => {
    e.preventDefault();
    this.props.dispatch(addTask());
    this.props.dispatch(setMessage('Task added successfully!'));
  }

  _onToggleTask = (task_id) => {
    this.props.dispatch(toggleTask(task_id));
    this.props.dispatch(setMessage('Task updated successfully!'));
  }

  _handleRequestClose = () => {
    this.props.dispatch(setMessage(''));
  }

  _onKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      this._onAddTaskClick(ev);
      ev.preventDefault();
    }
  }

  render() {
    const { task_name, todo_list } = this.props.todoReducer;
    const { snackbar_message } = this.props.snackBarReducer;
    return (
      <div>
        <Navigation />
        <InputTask
          value={task_name}
          onChange={this._onChange}
          onKeyPress={this._onKeyPress}
        />
        <GridList>
        <TodoList todo_list={todo_list} toggleTask={this._onToggleTask} />
        <Chart
          chartType="BarChart"
          data={[['Tasks', 'Count'], ['completed', todo_list.filter(t => t.completed).length], ['incomplete', todo_list.filter(t => !t.completed).length]]}
          options={{}}
          graph_id="BarChart"
          width="100%"
          height="400px"
        />
        </GridList>
        <Snackbar
          open={snackbar_message != undefined && snackbar_message.length > 0}
          message={snackbar_message}
          autoHideDuration={4000}
          onRequestClose={this._handleRequestClose}
        />
      </div>
    )
  }
}

export default connect(state => state)(Todo);