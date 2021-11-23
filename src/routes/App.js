import React from 'react'
import AppState from '../context/AppState';
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
        <AppState>       {/*En las rutas se le da acceso al "totalProducts" a todos los componentes envolviendolo con AppState*/}
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/card/:endPoint/" element={<Card />} />
                        <Route exact path="/detail/:endPoint/:id" element={<Detail />} />
                    </Routes>
                </Router>
            </div>
        </AppState>
    )
}