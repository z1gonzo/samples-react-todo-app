import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';


import registerServiceWorker from './registerServiceWorker';

import App from './App';
import { reducer } from './store'
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
