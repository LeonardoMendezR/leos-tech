import "./ComponentsSyles.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import CustomModal2 from "./CustomModal2.jsx";


const Nav = () => {
    const navigate = useNavigate();
    const userName = Cookies.get("name");
    const user_id = Cookies.get("user_id");
    const token = Cookies.get("token");
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
        const fetchUser = async () => {

            const response = await fetch(`http://localhost:8090/user/${user_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch admin');
            }
            const userData = await response.json();
            if (userData.role) {
                setIsAdmin(true);
            }


        };
        fetchUser();
    }, [user_id, token]);


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
                                    {isAdmin ? (
                                        <>
                                            <Link to="/dashboardAdmin/showUsers">
                                                <li>Editar usuarios</li>
                                            </Link>

                                            <Link to="/dashboardAdmin/editServices">
                                                <li> Editar servicios</li>
                                            </Link>
                                        </>
                                    ):
                                        (
                                            <></>
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