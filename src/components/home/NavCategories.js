import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

const LinkStyled = styled(Link)`
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
                    <LinkStyled className="active" to={{
                        pathname: "/Card",
                        search: "?category=guajolotas",
                    }}>Guajolotas</LinkStyled>

                    <LinkStyled to={{
                        pathname: "/Card",
                        search: "?category=bebidas",
                    }}>Bebidas</LinkStyled>

                    <LinkStyled to={{
                        pathname: "/Card",
                        search: "?category=tamales",
                    }}>Tamales</LinkStyled>
                </NavStyled>
            </div>
        </div>
    )
}
