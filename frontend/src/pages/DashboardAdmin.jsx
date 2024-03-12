import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";
import "../Styles.css"
const DashboardAdmin = () => {



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