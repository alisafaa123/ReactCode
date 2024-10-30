import React from 'react';
import './style.css'; 
import bodying from './img/bodying.svg'; 
import { Link } from 'react-router-dom';

const Startfile = () => {
    return (
        <div>
            <main className="body">
                <div className="container">
                    <div className="text">
                        <h1>Welcome.</h1>
                        <p>This is my first challenge with HTML & CSS.</p>
                    </div>
                    <img src={bodying} alt="" />
                </div>
            </main>
            <footer className="footer">
                <div className="container">
                    <p>This app created by <span>Aon2023</span></p>
                </div>
            </footer>
        </div>
    );
};
export default Startfile;