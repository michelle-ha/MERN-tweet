import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
<<<<<<< HEAD
// We'll create this soon
import App from './app';
=======
import App from './app'; //not created yet
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;