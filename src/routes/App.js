import React from 'react'
import AppState from '../context/AppState';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
}
    from 'react-router-dom';
    
import { Card } from '../components/home/Card';
import { Detail } from '../components/detail/Detail';
import { ShoppingCart } from '../components/shoppingCart/ShoppingCart';
import { StartApp } from '../components/home/StartApp';

export const App = () => {
    return (
        <AppState>       {/*En las rutas se le da acceso al "totalProducts" a todos los componentes envolviendolo con AppState*/}
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<StartApp />} />
                        <Route exact path="/card/:endPoint/" element={<Card />} />
                        <Route exact path="/detail/:endPoint/:id" element={<Detail />} />
                        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
                        <Route path="*" element={<Navigate to= "/" />} />
                    </Routes>
                </Router>
            </div>
        </AppState>
    )
}