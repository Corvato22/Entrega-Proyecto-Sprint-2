import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { URL_SHOPPING_CART } from '../../helpers/URL'

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

    const [cardsShoppingCart, setCardsShoppingCart] = useState([])

    const getData = async () => {
        let resp = await fetch(URL_SHOPPING_CART)
        let data = await resp.json()
        setCardsShoppingCart(data)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    console.log(cardsShoppingCart[0].products)

    return (
        <div>
            <HeaderShoppingCart />
            <StyledCartContainer>
                {
                    cardsShoppingCart.length === 0 ?
                        <img src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1637806696/Guappjolotes%20-%20Sprint%202/NoProducts_a8jouv.png" alt="Empty Cart" />
                        : cardsShoppingCart[0].products.map((data) => (
                            <div>
                                <img src={data.image} alt={data.name} />
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>x1</h3>
                                </div>
                                <p>{'$' + data.price} MXN</p>
                            </div>
                        ))
                }
            </StyledCartContainer>
        </div>
    )
}
