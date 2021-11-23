import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const LinkStyled = styled(NavLink)`

    &.active img{
        width: 64px;
        height: 69px;
        margin: 15px;
        opacity: 1;
    }
    
    img{
        width: 64px;
        height: 69px;
        margin: 15px;
        opacity: 0.3;

        &:hover:active {
            transform: scale(.90);
        }
}
`

const FlavorDetailContainer = styled.div`
    margin-top: 40px;

    h2 {
        margin: 0;
        font-size: 20px;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 24px;
    }
`

export const FlavorDetail = ({ productFlavor, changeFlavor, endPoint }) => {


    //* Quizás se pueda arreglar lo del la opacidad con un NavLink
    return (
        <FlavorDetailContainer>
            <h2>Sabor</h2>
            <div>
                {
                    productFlavor.map((data) => (
                        <LinkStyled key={data.id} to={{ pathname: `/detail/${endPoint}/${data.id}` }} onClick={() => { changeFlavor(data.id) }}>
                            <img key={data.id} src={data.flavor.imageflavor} alt={data.flavor.nameflavor} />
                        </LinkStyled>
                    ))
                }
            </div>
        </FlavorDetailContainer>
    )
}
