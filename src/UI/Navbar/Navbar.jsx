import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";

const Navbar = () => {

        const {isAuth, setIsAuth} = useContext(AuthContext);

        const logout = () => {
            setIsAuth(false);
            localStorage.removeItem('auth');
        }

        return (
            <div style={{display: 'flex'}} className={'navbar'}>
                <div style={{left: 'right'}}>
                    <button onClick={logout}>Log Out</button>
                </div>
                <div className={'navbar__item'}>
                    <Link to={'/about'}>About<br/></Link>
                    <Link to={'/posts'}>Posts</Link>
                </div>
            </div>
        )
            ;
    }
;

export default Navbar;