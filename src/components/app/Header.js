import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    fontWeight: 'bold',
    color: 'red'
}

const Header = () => (
    <div>
        <h1>A Blog</h1>
        <NavLink
            to="/"
            activeStyle={activeStyle}
            exact={true}
        >
            Dashboard
        </NavLink>
        <NavLink
            to="/create"
            activeStyle={activeStyle}
            exact={true}
        >
            Create Post
        </NavLink>
    </div>
)

export default Header;