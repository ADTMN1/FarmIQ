import { Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/dashboards/Dashboard";
import Management from "../pages/management/Dashboard";
import Messaging from "../pages/Messaging/Dashboard";
import Kebeles from "../pages/Kebeles/Dashboard";
import Profile from "../pages/Profile/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/management" element={<Management />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/kebeles" element={<Kebeles />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
