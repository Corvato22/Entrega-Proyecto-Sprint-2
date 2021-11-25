import React from 'react'
import { Header } from './Header'
import { NavCategories } from './NavCategories'
import { SearchBar } from './SearchBar'

export const Home = () => {
    return (
        <>
            <Header />
            <h1>Nada como una Guajolota para empezar el día</h1>
            <SearchBar />
            <NavCategories />
        </>
    )
}
