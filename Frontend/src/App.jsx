import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import ZoneDashBoard from "./components/pages/ZoneDashBoard";
import Login from "./components/pages/Login";
import { Navigate } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/ZoneDashBoard/*" element={<ZoneDashBoard />} />
            <Route path="/Login/*" element ={<Login/>}/>

        </Routes>
    );          
}

export default App;