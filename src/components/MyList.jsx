import React, {useState} from 'react';
import ListItems from "./ListItems";
import MyInput from "./MyInput";

const MyList = (props) => {

    /*const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');*/

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        /*const newPost = {
            id: Date.now(),
            title: title,
            description: description
        }*/
        /*setTitle('');
        setDescription('');*/
        /*setPosts([...posts, newPost]);*/
        props.createPost({...post, id: Date.now()})
        setPost({title: '', body: ''})


    }

    const onChangeTitle = (e) => setPost({...post, title: e.target.value});
    const onChangeDescription = (e) => setPost({...post, body: e.target.value});

    return (
        <div>
            <MyInput onChangeTitle={onChangeTitle}
                     onChangeDescription={onChangeDescription}
                     title={post.title}
                     body={post.body}
                     addNewPost={addNewPost}
            />



            {!props.posts.length ?
                <h1 style={{textAlign: 'center'}}>There are no posts *( </h1> :
                props.posts.map((item, index) =>
                    <ListItems
                        title={item.title}
                        body={item.body}
                        number={index + 1}
                        key={item.id}
                        id={item.id}
                        removePost={props.removePost}
                        post={item}
                    />)

            }

        </div>
    );
};

export default MyList;