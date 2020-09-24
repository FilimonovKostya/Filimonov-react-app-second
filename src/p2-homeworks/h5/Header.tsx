import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.components}>

            <NavLink activeClassName={s.active} to={'/HW1'}><div className={s.links}>HW1</div></NavLink>
            <NavLink activeClassName={s.active} to={'/HW2'}><div>HW2</div></NavLink>
            <NavLink activeClassName={s.active} to={'/HW3'}><div>HW3</div></NavLink>
            <NavLink activeClassName={s.active} to={'/HW4'}><div>HW4</div></NavLink>

        </div>
    );
}

export default Header;
