import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import '../Styles.css';

const EditUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const token = Cookies.get('token');
    const user_id = Cookies.get('user_id');
    const client_id = Cookies.get('client_id');
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
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (!client_id) {
                    return;
                }
                const response = await fetch(`http://localhost:8090/user/${client_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, [client_id, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8090/user/${client_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log('User updated successfully');
                navigate('/dashboardAdmin');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || "Failed to update user");
            }
        } catch (error) {
            console.error('Error updating user:', error);
            setErrorMessage("Error updating user. Please try again later.");
        }
    };

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setUser(prevUser => ({
            ...prevUser,
            [name]: type === 'number' ? parseInt(newValue) : newValue
        }));
    };

    return (
        <div>
            {user ? (
                <div>
                    <div className="Container">
                        <div className="Card">
                            <h2>Edit User</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Name: </label>
                                    <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Last Name: </label>
                                    <input type="text" name="last_name" value={user.last_name}
                                           onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>DNI: </label>
                                    <input type="number" name="dni" value={user.dni} onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input type="email" name="email" value={user.email} onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Admin: </label>
                                    <input type="checkbox" name="role" checked={user.role}
                                           onChange={handleInputChange}/>
                                </div>
                                <button type="submit">Guardar cambios</button>
                                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Error al cargar al usuario :(</p>
            )}
        </div>
    );
};

export default EditUser;
