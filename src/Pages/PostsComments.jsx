import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import Loader from "../UI/Loader/Loader";

const PostsComments = () => {

    const params = useParams();
    const [comments, setComments] = useState([]);
    const [fetchingComments, isCommentsLoading, errorComments] = useFetching(async () => {
        const response = await PostService.getPostsComments(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchingComments()
    }, [])

    return (
        <div>
            <h3> Post number {params.id} </h3>
            {errorComments && <div>Error {errorComments}</div>}
            {isCommentsLoading ? <Loader/>
                : <div>
                    {comments.map(com =>
                        <div>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>}
        </div>
    );
};

export default PostsComments;