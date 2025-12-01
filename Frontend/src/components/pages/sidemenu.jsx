import React from "react";
import Dashboard from "./dashboards/Dashboard";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
import {
  DashboardOutlined,
  FilePdfOutlined,
  UserOutlined,
  MessageOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
const Sidemenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          height: "100vh",
          borderRight: 0,
          backgroundColor: "#ffffffff",
          color: "white",
          height: "100%",
          gap: "30px",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(items) => navigate(items.key)}
      >
        <Menu.Item key="/Dashboard" icon={<DashboardOutlined />}>
          {" "}
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" icon={<FilePdfOutlined />} title="Resources">
          <Menu.Item key="2">Documents</Menu.Item>
          <Menu.Item key="3">Videos</Menu.Item>
          <Menu.Item key="4">Images</Menu.Item>
        </SubMenu>
        <Menu.Item key="/messaging" icon={<MessageOutlined />}>
          Messaging
        </Menu.Item>
        <Menu.Item key="/management" icon={<UserOutlined />}>
          User Management
        </Menu.Item>
        <Menu.Item key="/kebeles" icon={<EnvironmentOutlined />}>
          Kebeles{" "}
        </Menu.Item>
        <Menu.Item key="7">Approvals </Menu.Item>
        <Menu.Item key="8">Urgencies </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidemenu;
