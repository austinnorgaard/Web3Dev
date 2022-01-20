import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import './app/store.js';
import { DAppProvider, ChainId } from '@usedapp/core';

function App() {
    return (
        <DAppProvider config={{
            supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
        }}>
            <div className="App">
                <Header/>
                <Home/>
            </div>
        </DAppProvider>
    );
}

export default App;