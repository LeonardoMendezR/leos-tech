import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import CustomModal from "../components/CustomModal.jsx";
import '../Styles.css';

const EditUser = () => {
    const { id } = Cookies.get('client_id');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const token = Cookies.get('token');
    const [showAlert1, setShowAlert1] = useState(false);
    const openAlert1 = () => {
        setShowAlert1(true);
    };
    const closeAlert1 = () => {
        setShowAlert1(false);
        navigate('/login');
    };

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:8090/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.status === 200) {
                throw new Error('Failed to fetch user');
            }
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8090/user/${id}`, {
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

    useEffect(() => {
        fetchUser();
    }, [id]);

    return (
        <div>
            <CustomModal
                showModal={showAlert1}
                closeModal={closeAlert1}
                content="You must log in to make a reservation"
            />
            {user ? (
                <div>
                    <h1>Edit User</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" name="last_name" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                        </div>
                        <div>
                            <label>DNI:</label>
                            <input type="text" name="dni" value={user.dni} onChange={(e) => setUser({ ...user, dni: e.target.value })} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div>
                            <label>Role:</label>
                            <input type="text" name="role" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} />
                        </div>
                        <button type="submit">Save Changes</button>
                        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                    </form>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditUser;
