import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { useNavigate  } from 'react-router-dom' //* Permite ir al componente anterior

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonGoBack = styled(Link)`
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

    // const navigate = useNavigate(); //* Permite ir al componente anterior, cambiar "ButtonGoback styled(link)" por button.
    // <ButtonGoBack onClick={() => navigate(-1)}>
    //     <GoBack icon={faChevronLeft} />
    // </ButtonGoBack>

    return (
        <>
            <HeaderContainer>
                <ButtonGoBack to='/card/guajolotas'>
                    <GoBack icon={faChevronLeft} />
                </ButtonGoBack>
                <Link to='/shoppingCart'>
                    <ShoppingCart icon={faShoppingCart} />
                </Link>
            </HeaderContainer>
        </>
    )
}
