import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import ZoneDashBoard from "./components/pages/ZoneDashBoard";
import Dashboard from "./components/pages/dashboards/Dashboard";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zoneDashBoard" element={<ZoneDashBoard />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;