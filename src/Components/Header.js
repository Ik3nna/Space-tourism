import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { links } from "../data";

function Header () {
    const [toggle, setToggle] = useState(false);

    const active = toggle ? styles.active : null;

    const activeStyle = { borderBottom: "3px solid #ffffff"};

    return(
        <header className={`d-flex align-items-center ${styles.header} ${active}`}>
            <img src="/assets/shared/logo.svg" alt="logo" /> <hr />

            <nav>
                <ul className="list-unstyled d-flex align-items-center">
                    {links.map((link)=>{
                        const { id, linkTo, number, text } = link;

                        return(
                            <li key={id}>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : null } className={`text-decoration-none ${styles.links}`} to={linkTo}>
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
