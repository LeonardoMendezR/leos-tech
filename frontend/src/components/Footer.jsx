import "./ComponentsSyles.css";
import React from "react";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>Acerca de Nosotros</h2>
                        <p> En Leos Tech, no solo creamos sitios web, creamos soluciones digitales
                            que impulsan el éxito de tu negocio. ¡Únete a nosotros y lleva tu
                            presencia en línea al siguiente nivel!</p>
                    </div>

                    <div className="footer-section contact">
                        <h2>Contacto</h2>
                        <p>Email: contacto@leostech.com</p>
                        <p>Teléfono: (+54) 3513941076</p>
                        <p>Teléfono: (+54) 3513745250</p>
                    </div>
                    <div className="footer-section social">
                        <h2>Encuentranos en redes</h2>
                        <ul className="listStylesFooter">Leonardo Méndez:</ul>
                        <li><a href="https://www.instagram.com/leonardo.mendez_/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/leonardo-tomás-méndez-rodríguez-0108b9214/"
                               target="_blank">Linkedin</a></li>

                        <ul className="listStylesFooter">Leonardo Morabito:</ul>
                        <li><a href="https://www.instagram.com/leo_morabito_2002/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/leonardo-morabito/" target="_blank">Linkedin</a></li>
                    </div>

                    <div className="footer-section links">
                        <h2>Enlaces Rápidos</h2>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/service">Servicios</a></li>
                            <li><a href="/portfolio">Portafolio</a></li>

                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Leos' Tech. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;