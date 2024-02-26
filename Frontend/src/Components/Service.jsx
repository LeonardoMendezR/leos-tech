import "./Styles.css";

const Service = () => {
    return (
        <div className="body-div">
            <p>
                <br />Nuestro equipo está formado por programadores con conocimientos en
                tecnologías de vanguardia. Nos destacamos por nuestra capacidad para comprender las necesidades específicas
                de cada cliente y traducirlas en soluciones innovadoras y eficientes.
            </p>
            <div className="my-bookings-container">
                <div className="bookingContainer">
                    <div className="booking-card">
                        <h2 className="booking-header">Frontend: </h2>
                        <p className="booking-info">HTML </p>
                        <p className="booking-info">CSS </p>
                        <p className="booking-info">Javascript </p>
                        <p className="booking-info">React </p>
                    </div>
                </div>
                <div className="bookingContainer">
                    <div className="booking-card">
                        <h2 className="booking-header">Backend: </h2>
                        <p className="booking-info">GoLang </p>
                    </div>
                </div>

                <div className="bookingContainer">
                    <div className="booking-card">
                        <h2 className="booking-header">Base de datos: </h2>
                        <p className="booking-info">MySQL </p>
                        <p className="booking-info">Mongo</p>
                    </div>
                </div>
                <div className="bookingContainer">
                    <div className="booking-card">
                        <h2 className="booking-header">Otras tecnologías: </h2>
                        <p className="booking-info">WordPress </p>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Service;