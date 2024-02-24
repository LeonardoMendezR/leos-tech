import {Link} from "react-router-dom";
import React from "react";
import "./Styles.css";

const Nav = () => {
    return (
        <nav>
            <div className="externDiv">
                <div className="logoDiv">
                    <img className="image" src="/imagenes/logoLeo.jpg"/>
                </div>
                <div className="name">
                    <h2> LEOS' TECH</h2>
                </div>
                <div className="linksDiv">
                    <div className="listDiv">
                        <ul className="listStyles">
                            <Link to="Home">
                                <li>Home</li>
                            </Link>
                            <Link to="Service">
                                <li>Service</li>
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