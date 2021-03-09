import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../sub-components/User';
import LoginLinks from '../sub-components/LoginLinks'

const Nav = (props) => {
    const { login } = useContext(UserContext);
    const loggedIn = login==="loggedIn"

    return (
        <nav className="winter spring autumn summer">
        <ul>
          <li className={props.home}><NavLink to="/">Home</NavLink></li> 
          <li className={props.resume}><NavLink to="/resume">Resume</NavLink></li>
          <li className={props.portfolio}><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li className={props.contact}><NavLink to="/contact">Contact</NavLink></li>
          {loggedIn ? <LoginLinks nav={props} /> : null }
          </ul>
      </nav>
    )
}

export default Nav;