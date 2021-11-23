import { useReducer } from "react";
import { ADD_COUNTER_PRODUCT, SUBSTRACT_COUNTER_PRODUCT } from "../types";
import appContext from "./AppContext";
import appReducer from "./AppReducer";

const AppState = ({ children }) => {

    const initialState = {
        totalProducts: 1
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

    return (
        <appContext.Provider
            value={{
                totalProducts: state.totalProducts,
                AddCounter,
                SubstractCounter
            }}
        >
            {children}

        </appContext.Provider>)
}

export default AppState