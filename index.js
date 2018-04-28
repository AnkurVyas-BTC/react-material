import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main app
import AppRoutes from './routes';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppRoutes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)