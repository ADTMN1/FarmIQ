import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboards/Dashboard";
import Management from "../pages/management/Dashboard";
import Messaging from "../pages/Messaging/Dashboard";
import Kebeles from "../pages/Kebeles/Dashboard";
import Profile from "../pages/Profile/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="management" element={<Management />} />
      <Route path="messaging" element={<Messaging />} />
      <Route path="kebeles" element={<Kebeles />} />
      <Route path = "profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
