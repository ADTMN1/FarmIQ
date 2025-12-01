import { useNavigate, useLocation } from "react-router-dom"; 
import { Menu } from "antd";
import {

    DashboardOutlined,
    UserOutlined,
    MessageOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";
const items = [{
  key: "dashboard",
  icon: <DashboardOutlined />,
  label: "Dashboard",
},
{
  key: "messaging",
  icon: <MessageOutlined />,
  label: "Messaging",
},
{
  key: "management",
  icon: <UserOutlined />,
  label: "User Management",
},
{
  key: "kebeles",
  icon: <EnvironmentOutlined />,
  label: "Kebeles",
},
]
const Sidemenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

 const getSelectedKey = () => {
  const segments = location.pathname.split("/");
  const last = segments[segments.length - 1] || "dashboard";
  return [last];
};
  return (
    
      <Menu
        mode="inline"
        items={items}
        style={{
          height: "100vh",
          borderRight: 0,
          backgroundColor: "#ffffffff",
            color: "white",
          gap: "30px",
          display: "flex",
          flexDirection: "column",
        }}
onClick={(item) => navigate(`/ZoneDashBoard/${item.key}`)}
selectedKeys={getSelectedKey()}
     />
     

  );
};

export default Sidemenu;
