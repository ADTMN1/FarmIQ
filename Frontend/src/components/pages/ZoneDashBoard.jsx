import React from "react";
import { Layout, Typography, Button, Menu } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Sidemenu from "./sidemenu";
import Profile from "./Profile";
const { Header, Content, Footer, Sider } = Layout;
import AppRoutes from "../AppRoutes/AppRoutes";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ffffff93",
  height: "84px",
  padding: "0 24px",
  boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
};

const contentStyle = {
  padding: "24px",
  minHeight: "calc(100vh - 84px)",
  background: "#f0f2f5",
};

const siderStyle = {
  backgroundColor: "#0c6800ff",
  boxShadow: "2px 0 8px 0 rgba(29, 35, 41, 0.05)",
  gap: "10px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: "100vh",
};

const ZoneDashBoard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={headerStyle}>
        <Typography.Title level={4} style={{ color: "Green", margin: 0 }}>
          <HomeOutlined style={{ marginRight: 8 }} />
          Agriculture Data Exchange
        </Typography.Title>
        <div className="flex items-center gap-6">
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            style={{ background: "green" }}
          >
            Logout
          </Button>
          <Profile />
        </div>
      </Header>
      <Layout>
        <Sider width={250} style={siderStyle} theme="light">
          <Sidemenu />
        </Sider>
        <Content style={contentStyle}>
          <div className="flex bg-white w-full h-full rounded-lg">
            <AppRoutes />
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center", background: "#f0f2f5" }}>
        FarmIQ ©2025 - Zone Dashboard
      </Footer>
    </Layout>
  );
};

export default ZoneDashBoard;
