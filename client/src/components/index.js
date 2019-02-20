import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

const store = createStores(()=>[],{},applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App/></Provider>,document.querySelector('#root')
);
