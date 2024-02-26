import React, {useState} from "react";
import "../Styles.css";


const Home = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);

    const toggleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    const toggleExpand2 = () => {
        setExpanded2(!expanded2);
    };
    const toggleExpand3 = () => {
        setExpanded3(!expanded3);
    };
    const toggleExpand4 = () => {
        setExpanded4(!expanded4);
    };
    return (
        <div className="body-div">
            <div className="clearfix">
                <h1 className="bigTitle">¡Construye tu presencia en línea con Leos' Tech!</h1>

                <p><br/>Leos' Tech es una empresa dedicada al desarrollo de software y a la creación
                    de páginas web a medida para empresas como la tuya.<br/>
                    <br/>
                    Nos especializamos en brindar soluciones digitales que impulsan el crecimiento y la
                    visibilidad de tu negocio en el mundo digital.</p>

                <h2 className="bigTitle">Te ofrecemos:</h2>

                <div className={`contenedor ${expanded1 ? 'expandido' : ''}`} onClick={toggleExpand1}>
                    <div className="title">Desarrollo a medida</div>
                    {expanded1 && (
                        <div className="contenido">
                            Nos adaptamos a las necesidades únicas de tu
                            empresa para ofrecerte soluciones que se ajusten perfectamente a tu
                            visión y objetivos comerciales.
                        </div>
                    )}
                </div>
                <div className={`contenedor ${expanded2 ? 'expandido' : ''}`} onClick={toggleExpand2}>
                    <div className="title">Tecnología de última generación</div>
                    {expanded2 && (
                        <div className="contenido">
                            Utilizamos las tecnologías más
                            avanzadas y probadas en el mercado para garantizar que tu sitio web
                            sea moderno, seguro y altamente funcional.
                        </div>
                    )}
                </div>
                <div className={`contenedor ${expanded3 ? 'expandido' : ''}`} onClick={toggleExpand3}>
                    <div className="title">Experiencia de usuario excepcional</div>
                    {expanded3 && (
                        <div className="contenido">
                            Nos enfocamos en crear experiencias de usuario intuitivas y atractivas que mantengan a tus
                            clientes comprometidos y vuelvan por más.
                        </div>
                    )}
                </div>
                <div className={`contenedor ${expanded4 ? 'expandido' : ''}`} onClick={toggleExpand4}>
                    <div className="title">Soporte continuo</div>
                    {expanded4 && (
                        <div className="contenido">
                            Estamos comprometidos a brindarte un servicio de
                            calidad incluso después del lanzamiento de tu sitio web. Estamos
                            aquí para resolver cualquier consulta o problema que puedas tener y
                            para realizar actualizaciones según sea necesario.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
