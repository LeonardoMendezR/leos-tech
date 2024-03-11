import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../Styles.css';

const EditServices = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    const selectService = (id) => {
        Cookies.set('service_id', id);
        navigate(`/dashboardAdmin/editServcice/${id}`);
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:8090/servicio');
                const data = await response.json();
                setServices(data); // Añadido para actualizar el estado de los usuarios
            } catch (error) {
                console.log('Error al obtener la lista de servicios:', error);
                // Considera mostrar un mensaje de error al usuario
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="backSearch">
            {services.length > 0 ? (
                <div className="Container">
                    {services.map((service) => (
                        <div key={service.id} className="Card">
                            <h2>{service.nameTechService}</h2>
                            <h2>{service.areaService}</h2>
                            <button onClick={() => selectService(service.id)}>Ver</button>
                        </div>
                    ))}
                    <div style={{ height: '100px' }}></div>
                </div>
            ) : (
                <div id="noHotels">
                    <p>No se encontraron servicios.</p>
                </div>
            )}
        </div>
    );
};

export default EditServices;
