import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../Styles.css"
import Cookies from 'js-cookie';

const DashboardAdmin = () => {
    const token = Cookies.get("token");
    const user_id = Cookies.get("user_id");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user_id || user_id === -1 || user_id === 0 || !token) {
            navigate("/");

        }
    }, []);
    return (

        <div className="my-service-container">
            <div className="serviceContainer">
                <div className="service-card">
                    <div className="service-header">
                        <Link to="/dashboardAdmin/showUsers">
                            Editar usuarios
                        </Link>
                    </div>
                </div>
            </div>
            <div className="serviceContainer">
                <div className="service-card">
                    <div className="service-header">
                        <Link to="/dashboardAdmin/editServices">
                            Editar Servicios
                        </Link>
                    </div>
                </div>
            </div>
            <div className="serviceContainer">
                <div className="service-card">
                    <div className="service-header">
                        <Link to="/dashboardAdmin/editPortfolio">
                            Editar Portafolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashboardAdmin;