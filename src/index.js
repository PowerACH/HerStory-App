import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux' //binder of react and redux

//create store inside store variable
//pass root reducer inside 'createStore' reducer
const store = createStore(rootReducer);

// import Provider so App has access to the store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
