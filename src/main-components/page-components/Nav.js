import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../sub-components/User';

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
          <li className={props.users}><NavLink to="/users">Sign Up</NavLink></li>
          {loggedIn ? <li className={props.entries}><NavLink to="/entries">View Entries</NavLink></li> : null }
          </ul>
      </nav>
    )
}

export default Nav;