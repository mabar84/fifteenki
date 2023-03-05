import React, {useState} from 'react';
import './App.css';
import {Keyboard} from './keyboard/keyboard';
//import {Route, Router} from "react-router-dom";
import '../src/scss/main.scss'

function App() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,' ']


    const click = (symbol: string) => {
        console.log(symbol)
    }

    return (
        <div className="App">
            <div className="body">
                <Keyboard arr={arr} click={click}/>
            </div>
        </div>
    )
}

export default App;