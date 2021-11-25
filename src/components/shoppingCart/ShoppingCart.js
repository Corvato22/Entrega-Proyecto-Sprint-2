import React, { useContext } from 'react'
import styled from 'styled-components'
import appContext from '../../context/AppContext'
import { HeaderShoppingCart } from './HeaderShoppingCart'

const StyledCartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 560px;

    img{
        width: 150px;
        height: 150px;
    }
`

export const ShoppingCart = () => {

    const AppContext = useContext(appContext)
    let { shoppingCart } = AppContext

    console.log(shoppingCart)


    return (
        <div>
            <HeaderShoppingCart />
            <StyledCartContainer>
                {
                    shoppingCart.length === 0 ?
                        <img src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1637806696/Guappjolotes%20-%20Sprint%202/NoProducts_a8jouv.png" alt="Empty Cart" /> : <h3>Hola</h3>
                }
            </StyledCartContainer>
        </div>
    )
}
