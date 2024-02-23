import {Link} from "react-router-dom";
import React from "react";
import "./Styles.css";

const Nav = () => {
    return (
        <nav>
            <div className="externDiv">
                <div className="logoDiv">
                    <span>Logo</span>
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
                            <Link to="Portafolio">
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