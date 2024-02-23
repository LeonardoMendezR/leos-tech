import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Nav from './Components/Nav.jsx';
import Portafolio from './Components/Portafolio.jsx';
import Service from "./Components/Service.jsx";
import Footer from "./Components/Footer.jsx";
const App=()=> {

    return (

            <div className="App">
                <Router>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/Portafolio" element={<Portafolio/>}/>
                        <Route path="/Service" element={<Service/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </div>
    );
}

export default App;