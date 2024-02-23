import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Nav from './Components/Nav.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Service from "./Components/Service.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {

    return (

        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Service" element={<Service/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;