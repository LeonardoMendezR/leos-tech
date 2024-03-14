import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../Styles.css"
import Cookies from "js-cookie";


const DashboardAdmin = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const user_id = Cookies.get("user_id")
    const token = Cookies.get("token")

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8090/user/${user_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch admin');
                }
                const userData = await response.json();
                if (!userData.role) {
                    navigate("/")
                }

            } catch (error) {
                console.error('Error fetching user:', error);
                navigate("/");
            }

        };
        fetchUser();
    }, [user_id, token]);

    return (

        <div className="my-service-container">
            <div className="serviceContainer">
                <div className="service-card">
                    <div className="service-header">
                        <Link to="/dashboardAdmin/showUsers">
                            Usuarios
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