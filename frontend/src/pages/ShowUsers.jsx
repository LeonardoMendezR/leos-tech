import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../Styles.css';

const ShowUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const selectUser = (id) => {
        Cookies.set('client_id', id);
        navigate(`/dashboardAdmin/showUsers/${id}`);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8090/user');
                const data = await response.json();
                setUsers(data); // Añadido para actualizar el estado de los usuarios
            } catch (error) {
                console.log('Error al obtener la lista de usuarios:', error);
                // Considera mostrar un mensaje de error al usuario
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="backSearch">
            {users.length > 0 ? (
                <div className="Container">
                    {users.map((user) => (
                        <div key={user.id} className="Card">
                            <h2>{user.name}</h2>
                            <h2>{user.last_name}</h2>
                            <button onClick={() => selectUser(user.id)}>Ver</button>
                        </div>
                    ))}
                    <div style={{ height: '100px' }}></div>
                </div>
            ) : (
                <div className="noFetch">
                    <p>No se encontraron usuarios.</p>
                </div>
            )}
        </div>
    );
};

export default ShowUsers;
