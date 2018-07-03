import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import 'tachyons';
import './index.css';

// Services
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './containers/App';

ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
