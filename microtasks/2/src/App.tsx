import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    const students = [
        {id: 1, name: 'Valera', age: 12},
        {id: 2, name: 'Petro', age: 14},
        {id: 3, name: 'Igor', age: 16}
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );
}

export default App;
