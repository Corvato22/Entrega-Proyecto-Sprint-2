import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom';
    
import { Home } from '../components/home/Home';
import { Card } from '../components/home/Card';
import { Detail } from '../components/detail/Detail';

export const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/card/:endPoint/" element={<Card />} />
                    <Route exact path="/detail/:endPoint/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    )
}