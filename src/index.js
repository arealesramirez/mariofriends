import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchFriends, requestFriends } from './reducers';
import thunkMiddleware  from 'redux-thunk';
import 'tachyons';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';


const logger = createLogger();
const rootReducer = combineReducers({ searchFriends, requestFriends });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();