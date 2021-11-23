import React from 'react'
import styled from 'styled-components'

const ContainerAddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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

export const AddToCartButton = ({ totalProducts }) => {

    return (
        <ContainerAddButton>
            <button>Agregar {totalProducts} al carrito  </button>  {/*El estado no se actualiza lo que provoca que el siempre se esté un paso atrás del contador, se le suma para compensar desfase*/}
        </ContainerAddButton>
    )
}
