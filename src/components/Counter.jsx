import React, {useState} from 'react';

const Counter = () => {

    let [value, setValue] = useState(0);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value += 1)}>increment</button>
            <button onClick={() => setValue(value -= 1)}>decrement</button>
        </div>
    );
};

export default Counter;