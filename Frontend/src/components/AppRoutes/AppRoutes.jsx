import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboards/Dashboard";
import Management from "../pages/management/Dashboard";
import Messaging from "../pages/Messaging/Dashboard";
import Kebeles from "../pages/Kebeles/Dashboard";
import Profile from "../pages/Profile/Dashboard";
import Forms from "../pages/forms/forms";
import Urgencies from "../pages/urgencies/urgent";
import Notifications from "../pages/notifications/notification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="management" element={<Management />} />
      <Route path="messaging" element={<Messaging />} />
      <Route path="kebeles" element={<Kebeles />} />
      <Route path = "profile" element={<Profile />} />
      <Route path="forms" element={<Forms />} />
      <Route path="urgencies" element={<Urgencies />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
