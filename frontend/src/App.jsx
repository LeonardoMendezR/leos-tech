import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Service from "./pages/Service.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";


const App = () => {

    return (

        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Service" element={<Service/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;