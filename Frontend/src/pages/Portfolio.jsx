import "../Styles.css";

const Portfolio = () => {
    return (
        <div className="body-div">
            <h1 className="bigTitle">Nuestros proyectos</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img src="../../imagenes/leostech.png" className="card-img-top" alt="logo leo" />
                <div className="card-body">
                    <p className="card-text"> creando xd...</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
