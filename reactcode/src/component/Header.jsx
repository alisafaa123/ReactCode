import React from 'react';
import './style.css'; 
import todoImage from './img/ToDo.svg'; 
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation(); 

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="contain">
                        <div className="logo">
                            <img src={todoImage} alt="Todo Logo" />
                        </div>
                        <div className="option">
                            <Link to="/Home.html" className={location.pathname === '/Home.html' ? 'Active' : ''}>
                                Home
                            </Link>
                            <Link to="/" className={location.pathname === '/' ? 'Active' : ''}>
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
