import React from "react";
import { Card, Typography } from "antd";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { BarChart } from '@mui/x-charts/BarChart';




const Dashboard = () => {
  return (
    <div>
      <Typography.Title
        level={3}
        style={{ color: "black", margin: 0, fontFamily: "sans-serif" }}
      >
        Haramaya Agriculture Dashboard
      </Typography.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10 ml-10 bg-gray-100 p-4 rounded-lg">
        <Card
          title="User Management" 
          
          style={{ width: 200, height: 200, backgroundColor: "" }}
          icon={<UserOutlined />}
        ></Card>
        <Card
          title="total Farmers"
          style={{ width: 200, height: 200, backgroundColor: "" }}
          icon={<UserOutlined />}
        ></Card>
        <Card
          title="Awarded Farmers"
          style={{ width: 200, height: 200, backgroundColor: "" }}
          icon={<UserOutlined />}
        ></Card>
        <Card
          title="Kebeles"
          style={{ width: 200, height: 200, backgroundColor: "" }}
          icon={<EnvironmentOutlined />}
        ></Card>
      </div>
      <KebelesChart/>
    </div>
  );
};
function KebelesChart() {
  return (
    <div>
    <BarChart
      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
    />
    </div>
  );
}

export default Dashboard;
