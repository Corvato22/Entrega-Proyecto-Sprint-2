import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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

const TitleStyled = styled.h3`
    padding-left: 30%;
    flex-grow: 1;
    margin: 0;
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

export const HeaderShoppingCart = () => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>
                <ButtonGoBack onClick={() => navigate(-1)}>
                    <GoBack icon={faChevronLeft} />
                </ButtonGoBack>
                <TitleStyled>Carrito</TitleStyled>
            </HeaderContainer>
        </>
    )
}

