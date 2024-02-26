import {Link} from "react-router-dom";
import React from "react";
import "./Styles.css";

const Nav = () => {
    return (
        <nav>
            <div className="externDiv">
                <div className="logoDiv">
                    <Link to="Home">
                        <img className="image" src="../../imagenes/leostech.png"/>
                    </Link>
                </div>
                <div className="name">
                    <Link to="Home">
                        <h2> LEOS' TECH</h2>
                    </Link>
                </div>
                <div className="linksDiv">
                    <div className="listDiv">
                        <ul className="listStyles">
                            <Link to="Home">
                                <li>Inicio</li>
                            </Link>
                            <Link to="Service">
                                <li>Servicios</li>
                            </Link>
                            <Link to="Portfolio">
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