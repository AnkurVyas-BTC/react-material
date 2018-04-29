import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="React App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer open={false} docked={false}>
          <MenuItem>
            <Link to='about'>About</Link>
          </MenuItem>
          <MenuItem>
            <Link to='todos'>Todos</Link>
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}
