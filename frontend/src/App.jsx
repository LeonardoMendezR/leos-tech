import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Service from "./pages/Service.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import ShowUsers from "./pages/ShowUsers.jsx";
import EditUsers from "./pages/EditUsers.jsx";
import EditServices from "./pages/EditServices.jsx";
import EditPortfolio from "./pages/EditPortfolio.jsx";


const App = () => {

    return (

        <div className="App">
            <Router>

                <Nav/>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/dashboardAdmin" element={<DashboardAdmin/>}/>
                    <Route path="/dashboardAdmin/showUsers" element={<ShowUsers/>}/>
                    <Route path="/dashboardAdmin/showUsers/:id" element={<EditUsers/>}/>
                    <Route path="/dashboardAdmin/editServices" element={<EditServices/>}/>
                    <Route path="/dashboardAdmin/editPortfolio" element={<EditPortfolio/>}/>

                </Routes>
                <Footer/>

            </Router>
        </div>
    );
}

export default App;