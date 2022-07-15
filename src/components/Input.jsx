import React, {useState} from 'react';

const Input = () => {

    let [text, setText] = useState(' ');

    return (
        <div>
            <div>{text ? text : 'This is empty place'}</div>
            <input onChange={(e) => setText(e.target.value)} value={text}/>
        </div>
    );
};

export default Input;