import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { URL_DATABASE } from '../../helpers/URL'
import { Home } from './Home'

const LinkStyled = styled(Link)`
    text-decoration: none;
`

const ContainerCard = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding: 16px;
    margin-bottom: 8px;

    &:hover:active {
        transform:scale(.95);
    }

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
        color: black;
        margin: 0;
    }

    p {
        font-weight: bold;
        color: #FA4A0C;
        margin: 0;
    }
`

export const Card = () => {

    // const endPoint = window.location.search.match(/=([A-Za-z]*)/)[1]  //* Obtener categoria mediante una regex descompuesta desde el "=" usando un queryparam

    const [cards, setCards] = useState([])

    const paramsCategory = useParams()
    const { endPoint } = paramsCategory

    const getData = async () => {
        let resp = await fetch(URL_DATABASE + endPoint)
        let data = await resp.json()
        setCards(data)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [endPoint])

    return (
        <div>
            <Home />
            {
                cards.map((data) => (
                    <LinkStyled to={`/detail/${endPoint}/${data.id}`} key={data.id}>
                        <ContainerCard>
                            <img src={data.image} alt={data.name} />
                            <div>
                                <h3>{data.flavor.nameflavor}</h3>
                                <p>{'$' + data.price} MXN</p>
                            </div>
                        </ContainerCard>
                    </LinkStyled>
                ))
            }
        </div>
    )
}
