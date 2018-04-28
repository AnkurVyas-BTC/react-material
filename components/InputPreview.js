import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class InputPreview extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Type something"
          floatingLabelText="Please type something here!"
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    )
  }
}
