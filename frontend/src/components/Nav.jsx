import {Link} from "react-router-dom";
import React from "react";
import "./ComponentsSyles.css";

const Nav = () => {
    return (
        <nav>
            <div className="externDiv">
                <div className="logoDiv">
                    <Link to="/">
                        <img className="image" src="../../imagenes/leostech.png"/>
                    </Link>
                </div>
                <div className="name">
                    <Link to="/">
                        <h2> LEOS' TECH</h2>
                    </Link>
                </div>
                <div className="linksDiv">
                    <div className="listDiv">
                        <ul className="listStyles">
                            <Link to="/">
                                <li>Inicio</li>
                            </Link>
                            <Link to="service">
                                <li>Servicios</li>
                            </Link>
                            <Link to="portfolio">
                                <li>Portafolio</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;