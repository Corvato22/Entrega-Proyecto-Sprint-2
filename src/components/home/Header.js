import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoImage = styled.img`
    width: 64px;
    height: 64px;
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

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Link to='/'>
                    <LogoImage src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636768072/Guappjolotes%20-%20Sprint%202/logo_bbdv3s.png" alt="Logo" />
                </Link>
                <Link to='/shoppingCart'>
                    <ShoppingCart icon={faShoppingCart} />
                </Link>
            </HeaderContainer>
        </>
    )
}
