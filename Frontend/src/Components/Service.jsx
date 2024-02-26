import "./Styles.css";

const Service = () => {
    return (
        <div className="body-div">
            <p>
                <br />Nuestro equipo está formado por programadores con conocimientos en
                tecnologías de vanguardia. Nos destacamos por nuestra capacidad para comprender las necesidades específicas
                de cada cliente y traducirlas en soluciones innovadoras y eficientes.
            </p>
            <div className="my-service-container">
                <div className="serviceContainer">
                    <div className="service-card">
                        <h2 className="service-header">Frontend: </h2>
                        <p className="service-info">HTML </p>
                        <p className="service-info">CSS </p>
                        <p className="service-info">Javascript </p>
                        <p className="service-info">React </p>
                    </div>
                </div>
                <div className="serviceContainer">
                    <div className="service-card">
                        <h2 className="service-header">Backend: </h2>
                        <p className="service-info">GoLang </p>
                    </div>
                </div>

                <div className="serviceContainer">
                    <div className="service-card">
                        <h2 className="service-header">Base de datos: </h2>
                        <p className="service-info">MySQL </p>
                        <p className="service-info">Mongo</p>
                    </div>
                </div>
                <div className="serviceContainer">
                    <div className="service-card">
                        <h2 className="service-header">Otras tecnologías: </h2>
                        <p className="service-info">WordPress </p>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Service;