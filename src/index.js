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
import IndividualArtworkView from './containers/IndividualArtworkView';
import './containers/App/styles.css';


//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

        <Route exact path="/" component={App} />
        <Route path="/artwork" component={IndividualArtworkView} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();