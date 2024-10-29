import React from 'react';
import './style.css'; 
import todoImage from './img/ToDo.svg'; 
import bodying from './img/bodying.svg'; 

const Home = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="contain">
                        <div className="logo">
                        <img src={todoImage} alt="Todo Logo" />
                        </div>
                        <div className="option">
                            <a href="Home.html">Home</a>
                            <a href="index.html" className="Active">About</a>
                        </div>
                    </div>
                </div>
            </header>
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

export default Home;
