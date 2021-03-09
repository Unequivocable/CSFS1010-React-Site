import React, { useContext } from 'react'
import LoginForm from './LoginForm'
import UserContext from './User'
import { NavLink } from 'react-router-dom';

const SignInButton = (props) => {
    const { setLogin, setToken } = useContext(UserContext);  
    const logOut = () => {
        setLogin("loggedOut");
        setToken("");

    }

    const loginAndOut = (loggedIn) => {
        switch(loggedIn) {
            case 'loggedOut':
                return <button className="title signin" onClick={() => setLogin("loggingIn")}>Sign In</button>
            case 'loggingIn' :
                return <LoginForm />
            case 'loggedIn' :
                return <button className="title signin" onClick={() => logOut()}><NavLink to="/">Logout</NavLink></button>
            //no default
        }
    }
    return (
        loginAndOut(props.loggedIn)
    )
}

export default SignInButton