import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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

export const QuantityDetail = () => {
    return (
        <QuantityDetailContainer>
            <div>
                <span>
                    <QuantityDetailButtons icon={faMinus} />
                </span>
                <p>3</p>
                <span>
                    <QuantityDetailButtons icon={faPlus} />
                </span>
            </div>
        </QuantityDetailContainer>
    )
}
