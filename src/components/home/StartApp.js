import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerStartButton = styled.div`
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        align-content: center;

            img {
                width: 300px;
            }
            
            h3{
                margin: 0;
                margin-bottom: 20px;
                text-align: center;
            }

            button {
                width: 312px;
                height: 69px;
                background-color: #FA4A0C;
                color: #FFFFFF;
                border: none;
                border-radius: 40px;
                font-size: 17px;

            &:hover:active {
                transform:scale(.95);
        }
    }
`

export const StartApp = () => {
    return (
        <ContainerStartButton>
            <img src="https://res.cloudinary.com/dzyyi4p7x/image/upload/v1636768072/Guappjolotes%20-%20Sprint%202/logo_bbdv3s.png" alt="" />
            <h3>Nada como empezar el día con una buena Guajolota</h3>
            <Link to="/card/guajolotas">
                <button>Ingresar</button>
            </Link>
        </ContainerStartButton>
    )
}
