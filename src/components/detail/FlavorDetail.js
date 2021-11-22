import React from 'react'
import styled from 'styled-components'


const FlavorDetailContainer = styled.div`
    margin-top: 40px;

    h2 {
        margin: 0;
        font-size: 20px;
    }

    img{
        width: 64px;
        height: 69px;
        margin: 15px;

            &:hover:active {
                transform: scale(.90);
            }
    }

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 24px;
    }
`

export const FlavorDetail = ({ productFlavor }) => {

    let productFlavorArray = productFlavor

    return (
        <FlavorDetailContainer>
            <h2>Sabor</h2>
            <div>
                {
                    productFlavorArray.map((data) => (
                        <img key={data.id} src={data.flavor.imageflavor} alt={data.flavor.nameflavor} />
                    ))
                }
            </div>
        </FlavorDetailContainer>
    )
}
