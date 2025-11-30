import React from 'react';
import { Layout, Typography, Button, Menu } from 'antd';
import {
  HomeOutlined,
  DashboardOutlined,
  LogoutOutlined,
  FilePdfOutlined,
  VideoCameraOutlined,
  UserOutlined
} from '@ant-design/icons';
import Dashboard from './dashboards/Dashboard';
import { Link } from 'react-router-dom';
import Sidemenu from './sidemenu';
import Profile from './Profile';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ffffff93",
  height: "84px",
  padding: "0 24px",
  boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)"
};

const contentStyle = {
  padding: '24px',
  minHeight: 'calc(100vh - 84px)',
  background: '#f0f2f5'
};

const siderStyle = {
  backgroundColor: '#0c6800ff',
  boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)'
};

const ZoneDashBoard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
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
          <div style={{ 
            background: '#fff', 
            padding: 24, 
            minHeight: '100%',
            borderRadius: 8,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)'
          }}>
            <Typography.Title level={3}>Zone Dashboard</Typography.Title>
            <p>Welcome to your dashboard. Here you can manage your agricultural resources and data.</p>
            {/* Add your dashboard widgets and components here */}
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
        FarmIQ ©2025 - Zone Dashboard
      </Footer>
    </Layout>
  );
};

export default ZoneDashBoard;