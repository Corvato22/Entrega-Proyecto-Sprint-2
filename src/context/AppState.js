import { useReducer } from "react";
import { ADD_COMBO, ADD_COUNTER_PRODUCT, ADD_TO_CART, SUBSTRACT_COMBO, SUBSTRACT_COUNTER_PRODUCT, SUBSTRACT_TO_CART } from "../types";
import appContext from "./AppContext";
import appReducer from "./AppReducer";

const AppState = ({ children }) => {

    const initialState = {
        totalProducts: 1,
        comboTotalProducts: 0,
        totalPriceProducts: 0,
        totalPriceCombo: 0,
        shoppingCart: []
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const AddCounter = () => {
        dispatch({
            type: ADD_COUNTER_PRODUCT
        })
    }

    const SubstractCounter = () => {
        dispatch({
            type: SUBSTRACT_COUNTER_PRODUCT
        })
    }

    const AddCombo = () => {
        dispatch({
            type: ADD_COMBO
        })
    }

    const SubstractCombo = () => {
        dispatch({
            type: SUBSTRACT_COMBO
        })
    }
    const AddToCart = () => {
        dispatch({
            type: ADD_TO_CART
        })
    }
    const SubstracToCart = () => {
        dispatch({
            type: SUBSTRACT_TO_CART
        })
    }

    return (
        <appContext.Provider
            value={{
                totalProducts: state.totalProducts,
                comboTotalProducts: state.comboTotalProducts,
                totalPriceProducts: state.totalPriceProducts,
                totalPriceCombo: state.totalPriceCombo,
                shoppingCart: state.shoppingCart,
                AddCounter,
                SubstractCounter,
                AddCombo,
                SubstractCombo,
                AddToCart,
                SubstracToCart
            }}
        >
            {children}

        </appContext.Provider>)
}

export default AppState