import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input` 
    width: 100%;
    height: 60px;
    border-radius: 50px;
    text-align: center;
    font-weight: 400;
    font-size: 17px;
    color: #FA4A0C;
    background-color: #E7E7E7;
    border: none;
    margin-bottom: 40px;

        &::placeholder{
            color: #9A9A9D;
        }

`

export const SearchBar = () => {
    return (
        <div>
            <SearchInput type="text" placeholder="Sabor de guajolota, bebida..."></SearchInput>
        </div>
    )
}
