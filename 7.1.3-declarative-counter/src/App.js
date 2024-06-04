import React, { useState } from 'react';

function App() {
    let [counter, changeCounter] = useState(1);

    const handleIncrement = () => {
        changeCounter(prevCounter => prevCounter + 1);
    };

    const handleDecrement = () => {
        changeCounter(prevCounter => prevCounter - 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>{counter}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </header>
            <div>
                <h4>{counter}</h4>
            </div>
        </div>
    );
}

export default App;

