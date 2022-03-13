import React, {useState} from 'react'
import './App.css';

function App() {

    let [a, setA] = useState(1)

    const onclickHandler = () => {
        setA(++a)
    }

    const onclickHandler1 = () => {
        setA(--a)
    }

    const onclickHandler2 = () => {
        setA(a = 0)
    }

    console.log(a)

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onclickHandler}>+1</button>
            <button onClick={onclickHandler1}>-1</button>
            <button onClick={onclickHandler2}>=0</button>
        </div>
    );
}

export default App;
