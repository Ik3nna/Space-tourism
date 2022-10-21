import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header () {
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        const links = document.querySelectorAll(".links");

        links.forEach((link)=>{
            link.addEventListener("click", (e)=>{
                const value = e.currentTarget;

                links.forEach((item)=>{
                    if (value === item) {
                        item.classList.add("active-link");
                    } else {
                        item.classList.remove("active-link");
                    }
                });
            });
        });
    },[]);

    const active = toggle ? styles.active : null;

    return(
        <header className={`d-flex align-items-center ${styles.header} ${active}`}>
            <img src="/assets/shared/logo.svg" alt="logo" /> <hr />

            <nav>
                <ul className="list-unstyled d-flex align-items-center">
                    <li><Link className={`text-decoration-none ${styles.links} ${styles.activeLink}`} to="/"><span>00</span> Home</Link></li>
                    <li><Link className={`text-decoration-none ${styles.links}`} to="/destination"><span>01</span>Destination</Link></li>
                    <li><Link className={`text-decoration-none ${styles.links}`} to="/crew"><span>02</span>Crew</Link></li>
                    <li><Link className={`text-decoration-none ${styles.links}`} to="/technology"><span>03</span>Technology</Link></li>
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
