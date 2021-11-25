import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { URL_DATABASE } from '../../helpers/URL'
import appContext from '../../context/AppContext'

const ComboDetailContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;

    h2 {
        margin: 0;
        font-size: 20px;
    }

    p {
        margin-top: 8px;
        margin-bottom: 24px;
        color: gray;
        font-size: 15px;
    }
`

const ComboCardsContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 152px;
    height: 138px;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding: 16px;
    margin-bottom: 10px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        img{
            width: 64px;
            height: 64px;
    
            &:hover:active {
                transform: scale(.90);
            }
        }

        h3{
            margin: 0; 
            font-size: 12px;
        }

        p{
            font-weight: bold;
            color: #FA4A0C;
            margin: 0; 
            font-size: 12px;
        }
    }
`

export const Combo = ({ endPoint }) => {

    const AppContext = useContext(appContext)
    let { AddToCart, SubstracToCart } = AppContext

    let endPointCombo
    let comboProduct

    endPoint === "guajolotas" || endPoint === "tamales" ?
        (endPointCombo = "bebidas") && (comboProduct = "bebida") :
        (endPointCombo = "guajolotas") && (comboProduct = "torta")

    const [cards, setCards] = useState([])

    const getData = async () => {
        let resp = await fetch(URL_DATABASE + endPointCombo)
        let data = await resp.json()
        setCards(data)
    }

    function changeCombo(e,data) {                         
        let combo = e.target.checked
        console.log("Que putas es combo", combo)
        console.log("Que putas es data", data)
        if (combo !== undefined) {                        //* Verifica si el checkbox no está inderterminado, es una buena practica para prevenir un error (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate)
            combo ? AddToCart(data) : SubstracToCart(data)         //* En este operador ternario combo ya vienen como boolean, entonces la declaración del operador es solor "combo"
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    return (
        <ComboDetailContainer>
            <h2>Guajolocombo</h2>
            <p>Selecciona la {comboProduct} que más te guste y disfruta de tu desayuno.</p>
            <ComboCardsContainer>
                {
                    cards.map((data) => (
                        <CardContainer key={data.id}>
                            <div className="containerImageTitle">
                                <img src={data.image} alt={data.name} />
                                <h3>{data.flavor.nameflavor}</h3>
                                <p>{'+ $' + data.price} MXN</p>
                            </div>
                            <input onChange={(e)=>{changeCombo(e,data)}} type="checkbox" />    {/*Corregir que si agrega si se checkea o no*/}
                        </CardContainer>
                    ))
                }
            </ComboCardsContainer>
        </ComboDetailContainer>
    )
}
