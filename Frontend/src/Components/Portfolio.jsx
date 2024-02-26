import "./Styles.css";

const Portfolio = () => {
    return (
        <div className="body-div">
            <h1 className="bigTitle">Nuestros proyectos</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img src="../../imagenes/logoLeo.jpg" className="card-img-top" alt="logo leo" />
                <div className="card-body">
                    <p className="card-text"> tengo la idea de poner los proyectos en cartas, como tengo en mi repo de arqsw1, pero es mejor si ya están alojadas en el back.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
