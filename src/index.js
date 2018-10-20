import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
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

//Función que se le envía al middleware
//Hace log de la acción enviada y del estado actualizado
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        };
    };
};

//Se crea un store con el reducer importado
const store = createStore(rootReducer, applyMiddleware(logger));
//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
