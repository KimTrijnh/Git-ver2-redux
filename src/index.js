import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App/Containers/App'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './Data/store/index'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

