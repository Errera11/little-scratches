import React, {useState} from 'react';

const MyInput = (props) => {

    return (
        <div>
            <input onChange={props.onChangeTitle} placeholder={'Title'} value={props.title}/>
            <input onChange={props.onChangeDescription} placeholder={'Description'} value={props.body}/>
            <button onClick={props.addNewPost}>Add</button>
        </div>
    );
};

export default MyInput;