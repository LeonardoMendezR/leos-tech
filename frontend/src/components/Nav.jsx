import "./ComponentsSyles.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import CustomModal2 from "./CustomModal2.jsx";


const Nav = () => {
    const navigate = useNavigate();
    const userName = Cookies.get("name");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const openAlert = () => {
        setShowAlert(true);
    };
    const closeAlert = () => {
        Cookies.remove('user_id');
        Cookies.remove('type');
        Cookies.remove('email');
        Cookies.remove('name');
        Cookies.remove('token');
        Cookies.remove('client_id');
        navigate("/");
        window.location.reload();

    };
    const CancelUnlogin = () => {
        setShowAlert(false);
    }
    const login = () => {
        navigate("/login");
    };
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    useEffect(() => {
        const type_user = Cookies.get('type');
        if (type_user === 'true') {
            setIsAdmin(true);
        }
    }, []);


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

                            {isAuthenticated ? (
                                <>
                                    <button id="loginButton" onClick={openAlert}>
                                        {userName ? `Bienvenido, ${userName}` : "Bienvenido"}
                                    </button>
                                    <Link to="/dashboardAdmin/showUsers">
                                        <li>Editar usuarios</li>
                                    </Link>

                                    <Link to="/dashboardAdmin/editServices">
                                        <li> Editar servicios</li>
                                    </Link>
                                    {isAdmin && (
                                        <>

                                        </>
                                    )}
                                </>
                            ) : (
                                <button id="loginButton" onClick={login}>Iniciar sesión</button>
                            )}
                            <CustomModal2
                                showModal2={showAlert}
                                closeModal2={closeAlert}
                                closeModal22={CancelUnlogin}
                                content2="¿Cerrar sesión?"
                            />


                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;