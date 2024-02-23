import React from "react";
import "./Styles.css";

const Home = () => {
    return (
        <div className="body-div">
            <div className="clearfix">
            <img src="imagenes/imagen.jpg" style={{ width: '500px', height: 'auto' }} alt="Descripción de la imagen" />
            <b>
                    Crea tu página web con nosotros
                </b>
                <p>
                    Leos tech es una empresa que se encarga del desarrollo de software y paginas webs para tu empresa
                </p>
                <p>
                    Sobre nosotros:
                    Somos estudiantes de ingenieria en sistemas, tenemos conocimientos en:
                    React js, python, golang, etc.
                </p>
                <b>
                    Esta es una prueba pa ver que onda el front, leo no me despidas
                </b>
            </div>
        </div>
    );
};

export default Home;
