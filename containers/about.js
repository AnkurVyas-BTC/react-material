import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class About extends Component {
  render() {
    return (
      <div>
        About
        <Link to='/'>
          <RaisedButton
            primary={true}
            label="Go Home"
          />
        </Link>
      </div >
    )
  }
}
