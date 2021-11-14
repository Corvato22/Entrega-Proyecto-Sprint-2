import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    // Route
}
    from 'react-router-dom';
    
import { Home } from '../components/home/Home';

export const App = () => {
    return (
        <div>
            <Router>
                <Home />
                <Routes>
                </Routes>
            </Router>
        </div>
    )
}