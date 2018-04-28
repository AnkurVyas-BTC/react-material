import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

export default class InputTask extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Type task ..."
          floatingLabelText="Task name"
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
          onKeyPress={e => this.props.onKeyPress(e)}
        />
      </div>
    )
  }
}
