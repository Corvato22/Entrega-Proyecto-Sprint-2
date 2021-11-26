import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { URL_SHOPPING_CART } from '../../helpers/URL'
import { ButtonPay } from './ButtonPay'

import { HeaderShoppingCart } from './HeaderShoppingCart'

const StyledEmptyCartContainer = styled.div`
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

const StyledCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 560px;
`

const StyledCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;


    img{
        width: 56px;
        height: 56px;
        margin-right: 10px;
    }

        .containerName{
        }

        .containerName p:nth-child(1){
            width: 180px;
            margin: 0;
            font-weight: bold;
            font-size: 14px;
        }

        .containerName p:nth-child(2){
            width: 180px;
            margin: 0;
            font-style: bold;
            font-size: 14px;
            color: #FA4A0C;
        }

        .containerPrice p:nth-child(1){
            margin: 0;
            font-weight: bold;
            font-size: 16px;
            color: #FA4A0C;
        }
`

const StyledTotalContainer = styled.div`
    margin-top: 16px;
    width: 100%;
    height: 53px;
    justify-content: space-between;
    display: flex;
    background-color: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    padding: 16px;

        h3:nth-child(1){
            font-size: 17px;
        }

        h3:nth-child(2){
            font-size: 17px;
            color: #FA4A0C;
        }
`

export const ShoppingCart = () => {

    const [cardsShoppingCart, setCardsShoppingCart] = useState([])

    const getData = async () => {
        let resp = await fetch(URL_SHOPPING_CART)
        let data = await resp.json()
        console.log(data)
        setCardsShoppingCart(data)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <HeaderShoppingCart />
            <StyledCartContainer>
                {
                    cardsShoppingCart.length === 0 ?
                        <StyledEmptyCartContainer>
                            <img src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1637806696/Guappjolotes%20-%20Sprint%202/NoProducts_a8jouv.png" alt="Empty Cart" />
                        </StyledEmptyCartContainer>

                        : cardsShoppingCart.map((data) => (
                            <StyledCardsContainer key={data.id}>
                                <img src={data.image} alt={data.name} />
                                <div className="containerName">
                                    <p>{data.name}</p>
                                    <p>x1</p>
                                </div>
                                <div className="containerPrice">
                                    <p>{'$' + data.price} MXN</p>
                                </div>
                            </StyledCardsContainer>
                        ))
                }
                {
                    cardsShoppingCart.length === 0 ?
                        null
                        : <StyledTotalContainer>
                            <h3>Total</h3>
                            <h3>$ {cardsShoppingCart.reduce((acc, elem) => acc + elem.price, 0)} MXN</h3>
                        </StyledTotalContainer>
                }
                <ButtonPay cardsShoppingCart={cardsShoppingCart} />
            </StyledCartContainer>
        </div>
    )
}
