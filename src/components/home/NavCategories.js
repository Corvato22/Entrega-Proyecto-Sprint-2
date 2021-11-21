import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

const LinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: 17px;
    color: #9A9A9D;

    &.active {
        color: #FA4A0C;
        text-decoration: underline;
    }
`

export const NavCategories = () => {
    
    return (
        <div>
            <div>
                <NavStyled>
                    <LinkStyled to={{
                        pathname: "/card/guajolotas",
                        // search: "/category=guajolotas",
                    }}>Guajolotas</LinkStyled>

                    <LinkStyled to={{
                        pathname: "/card/bebidas",
                        // search: "?category=bebidas",
                    }}>Bebidas</LinkStyled>

                    <LinkStyled to={{
                        pathname: "/card/tamales",
                        // search: "?category=tamales",
                    }}>Tamales</LinkStyled>
                </NavStyled>
            </div>
        </div>
    )
}
