import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useNavigate  } from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonGoBack = styled.button`
    border: none;
    background-color: #F2F2F2;
`

const GoBack = styled(FontAwesomeIcon)`
    width: 24px !important; 
    height: 24px; 
    color: black; 
    cursor: pointer;

    &:hover:active {
    transform:scale(.90);
    }
`

const ShoppingCart = styled(FontAwesomeIcon)`
    width: 24px !important; 
    height: 24px; 
    color: #aeaeae;
    cursor: pointer;

    &:hover:active {
    transform:scale(.90);
    }
`

export const HeaderDetail = () => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>
                <ButtonGoBack onClick={() => navigate(-1)}>
                    <GoBack icon={faChevronLeft} />
                </ButtonGoBack>
                <ShoppingCart icon={faShoppingCart} />
            </HeaderContainer>
        </>
    )
}