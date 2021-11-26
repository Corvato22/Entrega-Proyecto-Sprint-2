import React from 'react'
import styled from 'styled-components'
import { URL_SHOPPING_CART } from '../../helpers/URL'

const ContainerAddButton = styled.div`
    margin-top: 195px;
    position: sticky;
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

export const ButtonPay = ({ cardsShoppingCart }) => {

    const deleteProducts = async (element) => {
        console.log("element", element.id)
        await fetch(URL_SHOPPING_CART + "/" + element.id, {
            method: 'DELETE',
        })
        window.location.reload(true);
    }

    const getToDeleteProducts = () => {
        cardsShoppingCart.forEach((elem) => deleteProducts(elem))
    }
    return (
        <ContainerAddButton>
            <button onClick={() => { getToDeleteProducts() }}>Pagar</button>
        </ContainerAddButton>
    )
}
