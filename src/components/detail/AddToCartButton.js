import React, { useContext } from 'react'
import styled from 'styled-components'
import appContext from '../../context/AppContext'
import { URL_SHOPPING_CART } from '../../helpers/URL'

const ContainerAddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 312px;
        height: 69px;
        background-color: #FA4A0C;
        color: #FFFFFF;
        border: none;
        border-radius: 40px;
        font-size: 17px;

        &:hover:active {
            transform:scale(.95);
        }
    }
`

export const AddToCartButton = () => {

    const AppContext = useContext(appContext)
    let { shoppingCart } = AppContext

    const pushProducts = () => {
        shoppingCart.forEach((elem) => postProducts(elem))
    }

    const postProducts = async (element) => {
        console.log("element", element)
        await fetch(URL_SHOPPING_CART, {
            method: 'POST',
            body: JSON.stringify(element),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        window.location.reload(true);
    }

    return (
        <ContainerAddButton>
            <button onClick={() => { pushProducts() }}>Agregar {shoppingCart.length} al carrito $ {shoppingCart.reduce((acc, elem) => acc + elem.price, 0)} </button> {/*El Reduce permite ejecuta una función que permite aplicar operaciones sobre elementos de un array y devuelve un resultado */}
        </ContainerAddButton>
    )
}