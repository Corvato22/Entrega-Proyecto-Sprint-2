import { ADD_COUNTER_PRODUCT, SUBSTRACT_COUNTER_PRODUCT, ADD_TO_CART, SUBSTRACT_TO_CART } from "../types";

const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_COUNTER_PRODUCT:
            return {
                ...state,
                totalProducts: state.totalProducts + 1
            }
        case SUBSTRACT_COUNTER_PRODUCT:
            return {
                ...state,
                totalProducts: (state.totalProducts - 1) < 1 ? 1 : state.totalProducts - 1
            }
        case ADD_TO_CART:
            let newCart = [...state.shoppingCart]               //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
            newCart.push(action.payload)
            return {
                ...state,
                shoppingCart: newCart
            }
        case SUBSTRACT_TO_CART:
            let newCart2 = [...state.shoppingCart]              //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
            let indexFound = newCart2.findIndex((element) => element.id === action.payload.id)  //*Encuentra el índice de lo que hay que sacar  // Return implicito // Un payload es como pasar un parámetro a una función que está en un reducer.
            newCart2 = newCart2.filter((element, index) => index !== indexFound) //* "No me saque ninguno que sea diferente al indice encontrado"
            return {
                ...state,
                shoppingCart: newCart2
            }
        default: {
            return state
        }
    }
}

export default appReducer