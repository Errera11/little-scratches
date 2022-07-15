import React, {useContext, useEffect} from 'react';
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import {Route, Routes} from "react-router-dom";
import PostsComments from "./Pages/PostsComments";
import {publicRoutes, privateRoutes} from "./routes";
import {AuthContext} from "./context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    };

    return (
        <div>
            {isAuth ?
                <Routes>
                    {privateRoutes.map(item => <Route path={item.path} key={item.path} element={item.element} exact={item.exact}/>)}}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map( item => <Route path={item.path} key={item.path} element={item.element} exact={item.exact}/> ) }
                </Routes>
            }
        </div>
    );
};

export default AppRouter;