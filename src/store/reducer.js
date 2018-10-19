//Un reducer es una función
//Toma como parametros un estado y una acción

//Se define un estado inicial para el reducer
const initialState = {
    counter: 3,
    results: [] //Array de resultados. Cada uno con ID y valor
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                //... Spread operator. Traer una copia del estado para hacer cambios sobre ella sin tocar directamente el estado original.
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
                //Concat es una forma inmutable de actualizar un arreglo sin afectar el original
            };

        default:
            return state;
    }
};

export default reducer;
