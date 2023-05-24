import React from 'react';
import { NavLink } from 'react-router-dom';

import { navData } from 'data';
import styles from './Header.module.scss';


const Header = () => {
    return (

        <header className={styles.headerNav}>
            <ul className={styles.menuNav}>
                {navData.map(el => (
                    <li key={el.id}>
                        <NavLink
                            to={el.path}
                            className={({ isActive }) =>
                                isActive ? styles.activeNavLinkNav : styles.navLinkNav
                            }
                        >
                            {el.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>

    );
};


export default Header;