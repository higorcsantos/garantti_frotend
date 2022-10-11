import {Route, Routes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Create from '../pages/Create';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='create' element={<Create />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;