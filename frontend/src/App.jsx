import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar.jsx';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';

function App() {

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;