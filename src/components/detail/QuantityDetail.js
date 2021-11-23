import React, { useContext } from 'react'
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

export const QuantityDetail = () => {     //* Obtiene la data del estado del componente hijo desde el padre

    const AppContext = useContext(appContext)
    
    let { AddCounter, totalProducts, SubstractCounter } = AppContext

    let opacityButton

    totalProducts === 1 ? opacityButton = "active" : opacityButton = ""

    // const [counter, setCounter] = useState(1)
    // const add = () => setCounter(counter + 1)
    // const noAdd = () => counter <= 1 ? setCounter(1) : setCounter(counter - 1)

    return (
        <QuantityDetailContainer>
            <div>
                <span className={opacityButton}>
                    <QuantityDetailButtons className={opacityButton} onClick={() => { SubstractCounter() }} icon={faMinus} />  {/* Con el estado mandado como "prop" actualiza segun el estado counter y devuelve al parent*/}
                </span>
                <p>{totalProducts}</p>
                <span>
                    <QuantityDetailButtons onClick={() => { AddCounter() }} icon={faPlus} />
                </span>
            </div>
        </QuantityDetailContainer>
    )
}
