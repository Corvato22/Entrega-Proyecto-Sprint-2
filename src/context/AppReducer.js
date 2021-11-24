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
            return {
                ...state,
                shoppingCart: state.shoppingCart
            }
        case SUBSTRACT_TO_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart
            }
        default: {
            return state
        }
    }
}

export default appReducer