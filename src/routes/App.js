import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom';
    
import { Home } from '../components/home/Home';
import { NavCategories } from '../components/home/NavCategories';
import { Card } from '../components/home/Card';

export const App = () => {
    return (
        <div>
            <Router>
                <Home />
                <NavCategories/>
                <Routes>
                    <Route exact path="/Card" element={<Card />} />
                </Routes>
            </Router>
        </div>
    )
}