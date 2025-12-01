import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import ZoneDashBoard from "./components/pages/ZoneDashBoard";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zoneDashBoard" element={<ZoneDashBoard />} />
        </Routes>
    );
}

export default App;