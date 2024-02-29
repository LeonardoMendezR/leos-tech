import React, {useState} from 'react';
import Cookies from 'js-cookie';
import CustomModal from '../components/CustomModal.jsx';
import "../Styles.css"

const Login = () => {
    const [email, setEmail] = useState(''); // Se inicializan las variables vacías
    const [password, setPassword] = useState('');
    let [emptyRegister] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const openAlert1 = () => {
        setShowAlert1(true);
    };
    const closeAlert1 = () => {
        setShowAlert1(false);
    };
    const openAlert2 = () => {
        setShowAlert2(true);
    };
    const closeAlert2 = () => {
        setShowAlert2(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Para que no recargue la página
        if (email === '') {
            document.getElementById('inputEmailLogin').style.borderColor = 'red';
            emptyRegister = true;
        } else {
            document.getElementById('inputEmailLogin').style.borderColor = '';
        }
        if (password === '') {
            document.getElementById('inputPasswordLogin').style.borderColor = 'red';
            emptyRegister = true;
        } else {
            document.getElementById('inputEmailLogin').style.borderColor = '';
        }
        if (!emptyRegister) {

            try {
                // Envía la respuesta al backend (Postman, básicamente)
                const response = await fetch('http://localhost:8090/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password}),
                }).then((response) => {
                    console.log(response.status)
                    if (response.ok) {
                        console.log("hizo el return")
                        return response.json();
                    } else {
                        openAlert1();
                        console.log("hizo el error")
                    }
                });
                if (response.id_user) {
                    // Si el usuario existe
                    // El usuario está en la base de datos
                    console.log('Usuario válido');
                    Cookies.set('user_id', response.id_user)
                    Cookies.set('email', email)
                    Cookies.set('token', response.token)
                    Cookies.set('type', response.tipo)
                    window.location.reload();
                }
            } catch (error) {
                Cookies.set('user_id', "-1")

                console.log('Error al realizar la solicitud al backend:', error);
            }
        } else {
            openAlert2()
            emptyRegister = true;
        }

    };
    return (
        <div className={"body-div"}>
            <CustomModal
                showModal={showAlert2}
                closeModal={closeAlert2}
                content="Debes completar todos los campos"
            />
            <CustomModal
                showModal={showAlert1}
                closeModal={closeAlert1}
                content="Usuario no registrado"
            />
            <h1 className={"bigTitle"}>Iniciar sesión</h1>
            <form id="formLogin" onSubmit={handleSubmit}>
                <input
                    id={'inputEmailLogin'}
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    id={'inputPasswordLogin'}
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button id="botonLogin" type="submit">Iniciar sesión</button>
                <br/>
            </form>
        </div>

    );
};
export default Login;