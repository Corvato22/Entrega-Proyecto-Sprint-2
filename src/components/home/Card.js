import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const ContainerCard = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding: 16px;
    margin-bottom: 8px;

    img {
        width: 80px;
        height: 80px;
        margin-right: 30px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h3 {
        margin: 0;
    }

    p {
        font-weight: bold;
        color: #FA4A0C;
        margin: 0;
    }
`

export const Card = () => {

    const endPoint = window.location.search.match(/=([A-Za-z]*)/)[1]  //* Obtener categoria mediante una regex descompuesta desde el "=" usando un queryparam

    const url = ('https://db-productos-sprint-2.herokuapp.com/' + endPoint)

    const [cards, setCards] = useState([])

    const getData = async () => {
        let resp = await fetch(url)
        let data = await resp.json()
        setCards(data)
    }

    useEffect(() => {
        getData();
    })


    return (
        <div>
            {
                cards.map((data) => (
                    <ContainerCard key={data.id}>
                        <img src={data.image} alt={data.name} />
                        <div>
                            <h3>{data.flavor.nameflavor}</h3>
                            <p>{'$' + data.price} MXN</p>
                        </div>
                    </ContainerCard>
                ))
            }
        </div>
    )
}
