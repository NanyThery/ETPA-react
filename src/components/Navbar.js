import React from 'react';
import './styles/Navbar.css'
import { NavLink } from 'react-router-dom'

class NavigationBar extends React.Component {

    render() {
        return (
            <div className="container">
                <NavLink exact className="item" activeClassName="activeLink" to='/'> Home </NavLink>
                <NavLink className="item" activeClassName="activeLink" to='/about'> ¿Qué es esto? </NavLink>
            </div>
        )
    }
}

export default NavigationBar