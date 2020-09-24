import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.components}>

            <NavLink activeClassName={s.active} to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink activeClassName={s.active} to={'/junior'}>Junior</NavLink>
            <NavLink activeClassName={s.active} to={'/juniorPlus'}>JuniorPlus</NavLink>

        </div>
    );
}

export default Header;
