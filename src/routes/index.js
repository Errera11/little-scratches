import About from "../Pages/About";
import Posts from "../Pages/Posts";
import PostsComments from "../Pages/PostsComments";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About />},
    {path: '/posts', element: <Posts />},
    {path: '/posts/:id', element: <PostsComments />},
    {path: '*', element: <About />}
]

export const publicRoutes = [
    {path: '/login', element: <Login />},
    {path: '/about', element: <About />},
    {path: '*', element: <Login />}
]

