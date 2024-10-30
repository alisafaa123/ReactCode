import React, { useState } from 'react';
import './style.css';
import close from './img/close btn.svg'; 
import { Link } from 'react-router-dom'; 

const Home = () => {
    const [items, setItems] = useState([
        "Hello this is my first Todo.",
        "Hello this is my second Todo.",
        "Hello this is my 3rd Todo."
    ]);
    
    const [newItem, setNewItem] = useState("");

    const showItems = () => {
        return items.map((el, i) => (
            <div className="card" key={i}>
                <p>{el}</p>
                <button onClick={() => removeData(i)}>
                    <img src={close} alt="Close" />
                </button>
            </div>
        ));
    };

    const removeData = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const adding = () => {
        if (newItem !== "") {
            setItems([...items, newItem]);
            setNewItem(""); // Clear input after adding
        } else {
            alert("Enter a value please.");
        }
    };

    return (
        <div>
            <div className="body">
                <div className="container">
                    <div className="text">
                        <h1>Simple ToDo App</h1>
                        <p>This todo app is for testing design.</p>
                    </div>
                    <div className="insert">
                        <input 
                            placeholder="Write Text here . . ." 
                            type="text" 
                            value={newItem} 
                            onChange={(e) => setNewItem(e.target.value)} 
                        />
                        <button onClick={adding}>+ Add New</button>
                    </div>
                    <div className="item" id="item">
                        {showItems()}
                        <div className="amount">
                            <p>Total List:</p>
                            <h4 id="amount">{items.length}</h4>
                        </div>
                    </div>
                    <div class="adding">
                         <button onClick={adding}>+ Add New</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
