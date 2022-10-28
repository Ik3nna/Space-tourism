import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { links } from "../data";

function Header () {
    const [toggle, setToggle] = useState(false);
    
    return(
        <header className={`d-flex align-items-center ${styles.header} ${toggle ? styles.active : null}`}>
            <img src="/assets/shared/logo.svg" alt="logo" /> <hr />

                <nav>
                    <ul className="list-unstyled d-flex align-items-center">
                        {links.map((link)=>{
                            const { id, linkTo, number, text } = link;

                            return(
                                <li key={id}>
                                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : null} to={linkTo}>
                                        <span>{number}</span>{text}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

            <div className={styles.overlay}></div>
            <img src={`${toggle ? "/assets/shared/icon-close.svg": "/assets/shared/icon-hamburger.svg" }`}
                className={`d-block d-md-none ${styles.hamburger}`} onClick={()=>{setToggle(!toggle)}} 
            />
        </header>
    );
}

export default Header;
