import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header () {
    const [toggle, setToggle] = useState(false);
    const [nav, setNav] = useState(false);
    
    return(
        <header className={`d-flex align-items-center ${toggle ? "active": null}`}>
            <img src="/assets/shared/logo.svg" alt="logo" /> <hr />

            <nav>
                <ul className="list-unstyled d-flex align-items-center">
                    <li><Link className="text-decoration-none links active-link" to="/"><span>00</span> Home</Link></li>
                    <li><Link className={`text-decoration-none links ${ nav ? "active-link" : null}`} to="/destination"><span>01</span>Destination</Link></li>
                    <li><Link className={`text-decoration-none links ${ nav ? "active-link" : null}`} to="/crew"><span>02</span>Crew</Link></li>
                    <li><Link className={`text-decoration-none links ${ nav ? "active-link" : null}`} to="/technology"><span>03</span>Technology</Link></li>
                </ul>
            </nav>

            <div className="overlay"></div>
            <img src={`${toggle ? "/assets/shared/icon-close.svg": "/assets/shared/icon-hamburger.svg" }`}
                className="d-block d-sm-none hamburger" onClick={()=>{setToggle(!toggle)}} 
            />
        </header>
    );
}

export default Header;
