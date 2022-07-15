import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const ListItems = ({title, body,  ...props}) => {

    const navigate = useNavigate()

    return (
        <div style={{margin: 15}}>
            <strong>{props.id}    </strong>
            <strong>{title}</strong><br />
            {body} <br />
            <button onClick={() => {
                props.removePost(props.post.id);
            }}>delete</button>
            <button onClick={() => navigate(`/posts/${props.id}`)}>Open</button>
        </div>
    );
};

export default ListItems;