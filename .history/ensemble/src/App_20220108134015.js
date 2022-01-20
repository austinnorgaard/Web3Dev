import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import './app/store.js';

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;