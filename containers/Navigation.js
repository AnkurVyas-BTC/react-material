import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { toggleNavigation } from "../actions/navigation";

class Navigation extends Component {
  onLeftIconButtonClick = () => {
    this.props.dispatch(toggleNavigation());
  }

  onRequestChange = () => {
    this.props.dispatch(toggleNavigation());
  }

  render() {
    const { navigation_open } = this.props.navigationReducer;

    return (
      <div>
        <AppBar
          title="React App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.onLeftIconButtonClick}
        />
        <Drawer open={navigation_open} docked={false} onRequestChange={this.onRequestChange}>
          <Link to='about'>
            <MenuItem onClick={this.onRequestChange}>
              About
            </MenuItem>
          </Link>
          <Link to='todos'>
            <MenuItem onClick={this.onRequestChange}>
              Todos
            </MenuItem>
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default connect(state => state)(Navigation);