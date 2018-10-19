import React, { Component } from 'react';
//Connect es la función que me permite conectar el componente a la parte del store que le interesa al componente
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    //--ESTADO PROPIO DEL COMPONENTE
    // state = {
    //     counter: 0
    // };

    //--MANEJO DE CAMBIO DE ESTADO ANTES DE USAR REACT-REDUX
    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter + 1 };
    //             });
    //             break;
    //         case 'dec':
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter - 1 };
    //             });
    //             break;
    //         case 'add':
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter + value };
    //             });
    //             break;
    //         case 'sub':
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter - value };
    //             });
    //             break;
    //         default:
    //             break;
    //     }
    // };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                {/* {Como se invocaba la acción antes de usar Redux} */}
                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} /> */}
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={this.props.onDeleteResult}>
                            {storedResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

//Declaro en una función la parte del estado que me interesa conocer
//Hago un mapeo de ese estado a props dando el nombre del prop y la parte del estado
//Recibe como parámetro el state almacenado en Redux
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

//Se necesitan despachar acciones dentro del componente
//Declaro que tipo de acciones quiero despachar en este contenedor
//Recibe como parámetro 'dispatch'
const mapDispatchToProps = dispatch => {
    return {
        //Llamo la función dispatch que me da React-Redux
        //La función de dispatch queda mapeada como un prop que luego puedo usar en un handler de algún componente para despachar una acción hacia el reducer
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        //Adicional a type puedo enviar un payload. Datos adicionales para procesar en el reducer
        onAddCounter: () => dispatch({ type: 'ADD', val: 5 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 5 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: () => dispatch({ type: 'DELETE_RESULT' })
    };
};

//connect da acceso al componente a la parte del estado definida en mapStateToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
