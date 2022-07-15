import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../context";

const Login = () => {

    const {isAuth, setIsAuth, setIsLoading} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type='text' placeholder={'Login...'}/>
                <input type='password' placeholder={'Password...'}/>
                <button>Sign in</button>
            </form>
        </div>
    );
};

export default Login;