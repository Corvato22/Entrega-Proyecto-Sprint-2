import { useReducer } from "react";
import { ADD_COUNTER_PRODUCT, ADD_TO_CART, SUBSTRACT_COUNTER_PRODUCT, SUBSTRACT_TO_CART } from "../types";
import appContext from "./AppContext";
import appReducer from "./AppReducer";

const AppState = ({ children }) => {

    const initialState = {
        totalProducts: 0,
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

    const AddToCart = (product) => {
        dispatch({
            type: ADD_TO_CART, payload: product
        })
    }
    
    const SubstracToCart = (product) => {
        dispatch({
            type: SUBSTRACT_TO_CART, payload: product
        })
    }

    return (
        <appContext.Provider
            value={{
                totalProducts: state.totalProducts,
                shoppingCart: state.shoppingCart,
                AddCounter,
                SubstractCounter,
                AddToCart,
                SubstracToCart
            }}
        >
            {children}

        </appContext.Provider>)
}

export default AppState