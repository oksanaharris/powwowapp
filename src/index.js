/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//REDUX--------------------------------------
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
//CSS-----------------------------------------
import './index.css';
//CONTAINERS----------------------------------
import App from './containers/App';
import Register from './containers/Register';
import './containers/App/styles.css';
import './containers/App/hearts.styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';




//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );

store.subscribe(()=> {
  console.log('store changed', store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();