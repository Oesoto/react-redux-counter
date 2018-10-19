import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

//Se crea un store con el reducer importado
const store = createStore(reducer);
//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
