import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//Importar cada uno de los reducers
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//La función combineReducers recibe un objeto con cada uno de los reducers
//para crear un único reducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//Se crea un store con el reducer importado
const store = createStore(rootReducer);
//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
