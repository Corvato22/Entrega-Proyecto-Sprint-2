import {
    ADD_COUNTER_PRODUCT, SUBSTRACT_COUNTER_PRODUCT, ADD_COMBO, SUBSTRACT_COMBO, ADD_TO_CART, SUBSTRACT_TO_CART } from "../types";

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
        case ADD_COMBO:
            return {
                ...state,
                comboTotalProducts: state.comboTotalProducts + 1
            }
        case SUBSTRACT_COMBO:
            return {
                ...state,
                comboTotalProducts: (state.comboTotalProducts - 1) < 0 ? 0 : state.comboTotalProducts - 1
            }
        case ADD_TO_CART:
            let newCart = [...state.shoppingCart]
            newCart.push(action.payload)
            return {
                ...state,
                shoppingCart: newCart
            }
        case SUBSTRACT_TO_CART:
            let newCart2 = [...state.shoppingCart]
            let indexFound = newCart2.findIndex((element) => element.id === action.payload.id)  //*Encuentra el índice de lo que hay que sacar  // Return implicito
            newCart2 = newCart2.filter((element, index) => index !== indexFound) //no me saque ninguno que sea diferente al indice encontrado
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