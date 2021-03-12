import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminLinks = (props) => {
    return (
        <>    
        <li className={props.nav.entries}><NavLink to="/entries">View Entries</NavLink></li>
        <li className={props.nav.users}><NavLink to="/users">Sign Up</NavLink></li>
        </>
    )}

export default AdminLinks;