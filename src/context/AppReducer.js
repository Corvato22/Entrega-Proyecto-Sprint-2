import { ADD_COUNTER_PRODUCT, SUBSTRACT_COUNTER_PRODUCT } from "../types";

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
        default: {
            return state
        }
    }
}

export default appReducer