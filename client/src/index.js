import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

import reducers from './reducers'

import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import createHistory from 'history/createBrowserHistory';


import App from './components/App';

const enhancers = [];

let middleware = [
  thunk,
  // routerMiddleware(history),
  // socketMiddleware,
];
if (process.env.NODE_ENV !== 'production') {
  middleware = [
    thunk,
    logger,
    // routerMiddleware(history),
    // socketMiddleware,
  ];
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);


// const store = createStore(reducers,{},applyMiddleware(reduxThunk));
const store = createStore(reducers,{},composedEnhancers);

ReactDOM.render(
  <Provider store={store}><App/></Provider>,document.querySelector('#root')
);
