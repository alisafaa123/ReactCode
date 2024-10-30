import React from 'react';
import Home from './component/Home';
import Startfile from './component/Startfile';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Startfile />} />
                <Route path='/Home.html' element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
