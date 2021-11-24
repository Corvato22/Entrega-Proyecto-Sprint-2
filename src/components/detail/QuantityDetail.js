import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import appContext from '../../context/AppContext'

const QuantityDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 32px;

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        width: 190px;
        height: 72px;
        border-radius: 20px;
        background-color: #FFFFFF;
    }

    span{
        border: solid 4px black;
        border-radius: 50%;

        &:hover:active {
            transform:scale(.90);
        }
    }

    .active{
        opacity: 0.5;
    }

    p{
        font-size: 28px;
        font-weight: bold;
    }
`

const QuantityDetailButtons = styled(FontAwesomeIcon)`
        width: 27px !important;
        height: 27px;
        margin: 4px;
        color: black;
        cursor: pointer;
`

export const QuantityDetail = ({ productDetail }) => {     //* Obtiene la data del estado del componente hijo desde el padre

    const AppContext = useContext(appContext)

    let { AddCounter, totalProducts, SubstractCounter, AddToCart, SubstracToCart, shoppingCart } = AppContext

    console.log("Objeto selecccionanod", productDetail)


    const AddProductToCart = () => {
        // let newCart = [...shoppingCart]             //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
        AddCounter();
        // newCart.push(productDetail)
        AddToCart(productDetail)
    }

    const SubstractProductFromCart = () => {
        // let newCart = [...shoppingCart]             //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
        SubstractCounter();
        // let indexFound = newCart.findIndex((element) => element.id === productDetail.id)  //*Encuentra el índice de lo que hay que sacar  // Return implicito
        // newCart = newCart.filter((element, index) => index === indexFound)                          //* Filtra el array quitando el índice encontrado
        SubstracToCart(productDetail)
    }

    let opacityButton

    totalProducts === 1 ? opacityButton = "active" : opacityButton = ""

    // const [counter, setCounter] = useState(1)
    // const add = () => setCounter(counter + 1)
    // const noAdd = () => counter <= 1 ? setCounter(1) : setCounter(counter - 1)

    return (
        <QuantityDetailContainer>
            <div>
                <span className={opacityButton}>
                    <QuantityDetailButtons className={opacityButton} onClick={() => { SubstractProductFromCart() }} icon={faMinus} />  {/* Con el estado mandado como "prop" actualiza segun el estado counter y devuelve al parent*/}
                </span>
                <p>{totalProducts}</p>
                <span>
                    <QuantityDetailButtons onClick={() => { AddProductToCart() }} icon={faPlus} />
                </span>
            </div>
        </QuantityDetailContainer>
    )
}
