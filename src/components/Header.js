import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
            <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        </nav>
    </header>
);

export default Header;