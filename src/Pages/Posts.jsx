import React, {useEffect, useRef, useState} from "react";
import PostFilter from "../components/PostFilter";
import MyList from "../components/MyList";
import Loader from "../UI/Loader/Loader";
import Pagintation from "../UI/Pagination/Pagintation";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import {useGetPagesArray} from "../hooks/useGetPagesArray";
import {usePosts} from "../hooks/usePosts";
import {PostService} from "../API/PostService";
import {useNavigate} from 'react-router-dom';
import {useObserver} from "../hooks/useObserver";
import MySelect from "../UI/MySelect/MySelect";


function Posts() {

    const navigate = useNavigate();


    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(totalPages, currentPage);
        const totalPosts = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalPosts, 10));
        setPosts([...posts, ...response.data]);
    })

    let pagesArray = useGetPagesArray(totalPages);

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (postId) => {
        setPosts(posts.filter(p => p.id !== postId));
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

    const lastElement = useRef();

    useObserver(lastElement, () => {
        setCurrentPage(currentPage + 1)
    }, currentPage < totalPages, isLoading)


    return (
        <div className="App">
            {/*<Input/>
            <Counter/>*/}
            <hr style={{margin: '150px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {postError && <h1>`Some error happened: ${postError}`</h1>}

            {isLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
                :
                <MyList posts={sortedAndSearchedPosts} createPost={createPost}
                        removePost={removePost}
                />
            }
            <div ref={lastElement} style={{background: 'red', height: 20}}/>
            <Pagintation currentPage={currentPage} setCurrentPage={setCurrentPage} pagesArray={pagesArray}/>
        </div>
    );
}

export default Posts;