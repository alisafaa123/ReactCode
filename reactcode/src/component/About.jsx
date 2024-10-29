import React from 'react';
import './style.css';
import todoImage from './img/ToDo.svg'; 
import close from './img/close btn.svg'; 

const About = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="contain">
                        <div className="logo">
                            <img src={todoImage} alt="ToDo Logo" />
                        </div>
                        <div className="option">
                            <a href="Home.html" className="Active">Home</a>
                            <a href="index.html">About</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="container">
                    <div className="text">
                        <h1>Simple ToDo App</h1>
                        <p>This todo app is for testing design.</p>
                    </div>
                    <div className="insert">
                        <input placeholder="Write Text here . . ." type="text" id="Newitem" />
                        <button>+ Add New</button>
                    </div>
                    <div className="item" id="item">
                        <div className="card">
                            <p>Hello, this is my first Todo.</p>
                            <button>
                                <img src={close} alt="Close" />
                            </button>
                        </div>
                        <div className="card">
                            <p>Hello, this is my Second Todo.</p>
                            <button>
                                <img src={close} alt="Close" />
                            </button>
                        </div>
                        <div className="card">
                            <p>Hello, this is my 3th Todo.</p>
                            <button>
                                <img src={close} alt="Close" />
                            </button>
                        </div>
                        <div className="amount">
                            <p>Total List:</p>
                            <h4 id="amount">3</h4>
                        </div>
                        <div className="adding">
                            <button>+ Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
