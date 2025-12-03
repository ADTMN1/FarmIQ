import React from "react";
import { Card, Statistic, Typography, Progress } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { BarChart } from "@mui/x-charts/BarChart";

const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col gap-8">
      {/* Title */}
      <Typography.Title
        level={3}
        style={{ color: "black", margin: 0, fontFamily: "sans-serif" }}
      >
        Haramaya Agriculture Dashboard
      </Typography.Title>

      <div className="flex flex-row gap-14">
        <div className="flex flex-col gap-10">
          <Cards />

          <KebelesChart />
        </div>

        <div className="w-[600px] gap-4 flex flex-col">
          <Cards2 />
        </div>
      </div>
    </div>
  );
};

function KebelesChart() {
  return (
    <Card
      hoverable
      style={{
        width: "700px",
        height: "400px",
        padding: 0,
      }}
    >
      <BarChart
        xAxis={[{ data: ["group A", "group B", "group C"] }]}
        series={[
          { data: [4, 3, 5], color: "#0071ceff" },
          { data: [1, 6, 3], color: "#0071ceff" },
          { data: [2, 5, 6], color: "#0071ceff" },
        ]}
        height={300}
      />
    </Card>
  );
}

const Cards = () => (
  <div className="grid grid-cols-4 gap-6 w-full">
    {/* Card 1 */}
    <Card
      hoverable
      style={{
        borderBottom: "5px solid #0071ce",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
      }}
    >
      <div>
        <p className="text-gray-500 text-sm">Total Messagings</p>
        <Statistic
          value={234}
          suffix="%"
          valueStyle={{ color: "#3f8600", fontWeight: "bold" }}
        />
      </div>
      <Progress
        type="circle"
        percent={58}
        width={40}
        strokeColor="#0071ce"
      />
    </Card>

    {/* Card 2 */}
    <Card
      hoverable
      style={{
        borderBottom: "5px solid #cf1322",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
      }}
    >
      <div>
        <p className="text-gray-500 text-sm">Kebeles</p>
        <Statistic
          value={71}
          suffix="%"
          valueStyle={{ color: "#cf1322", fontWeight: "bold" }}
        />
      </div>
      <Progress
        type="circle"
        percent={62}
        width={40}
        strokeColor="#cf1322"
      />
    </Card>

    {/* Card 3 */}
    <Card
      hoverable
      style={{
        borderBottom: "5px solid #fa8c16",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
      }}
    >
      <div>
        <p className="text-gray-500 text-sm">Total Farmers</p>
        <Statistic
          value={"1,45M"}
          valueStyle={{ color: "#fa8c16", fontWeight: "bold" }}
        />
      </div>
      <Progress
        type="circle"
        percent={72}
        width={40}
        strokeColor="#fa8c16"
      />
    </Card>

    {/* Card 4 */}
    <Card
      hoverable
      style={{
        borderBottom: "5px solid #15c39a",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
      }}
    >
      <div>
        <p className="text-gray-500 text-sm">New Farmers</p>
        <Statistic
          value={34}
          suffix="hires"
          valueStyle={{ color: "#15c39a", fontWeight: "bold" }}
          prefix={<ArrowUpOutlined />}
        />
      </div>
      <Progress
        type="circle"
        percent={81}
        width={40}
        strokeColor="#15c39a"
      />
    </Card>
  </div>
);



import { EyeOutlined, AimOutlined, FireOutlined } from "@ant-design/icons";

const Cards2 = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-full">
      <div className="grid grid-cols-1 gap-4">

        {/* Card 1 */}
        <Card hoverable className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 text-sm font-medium">Information Delivered</p>
              <Statistic
                value={1563}
                valueStyle={{ color: "#0071ce" }}
              />
              <p className="text-gray-400 text-xs">May 23 - June 01 (2017)</p>
            </div>

            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-md">
              <EyeOutlined style={{ color: "white", fontSize: 20 }} />
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card hoverable className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 text-sm font-medium">Goal</p>
              <Statistic
                value={30564}
                valueStyle={{ color: "#15c39a" }}
              />
              <p className="text-gray-400 text-xs">May 23 – June 01 (2017)</p>
            </div>

            <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-md">
              <AimOutlined style={{ color: "white", fontSize: 20 }} />
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card hoverable className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 text-sm font-medium">Impact</p>
              <Statistic
                value={42.6}
                precision={1}
                valueStyle={{ color: "#fa8c16" }}
                suffix="%"
              />
              <p className="text-gray-400 text-xs">May 23 – June 01 (2017)</p>
            </div>

            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-md">
              <FireOutlined style={{ color: "white", fontSize: 20 }} />
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};



export default Dashboard;
