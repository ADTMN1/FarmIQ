import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Layout, Button } from "antd";
import ZoneDashBoard from "./ZoneDashBoard";
import { DownloadOutlined } from "@ant-design/icons";
import {
  DollarOutlined,
  TeamOutlined,
  RiseOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

// Style constants
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  height: "84px",
};

const contentStyle = {
  backgroundColor: "#fff",
  minHeight: "100vh",
  overflow: "hidden",
  gap: "20px",
  flex: "1",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const footerStyle = {
  textAlign: "center",
  backgroundColor: "Green",
  padding: "10px",
  minHeight: "400px",
  color: "white",
};

// Data for resources
const zoneResources = [
  {
    zone: "Addis Ababa Zone",
    resources: [
      {
        type: "pdf",
        title: "Urban Agriculture Guide 2024",
        size: "3.2 MB",
        downloads: 245,
      },
      {
        type: "video",
        title: "Vertical Farming Training",
        size: "67 MB",
        downloads: 189,
      },
      {
        type: "pdf",
        title: "Monthly Production Data",
        size: "1.1 MB",
        downloads: 156,
      },
    ],
  },
  {
    zone: "Oromia Zone",
    resources: [
      {
        type: "pdf",
        title: "Coffee Production Manual",
        size: "5.8 MB",
        downloads: 432,
      },
      {
        type: "video",
        title: "Sustainable Farming Practices",
        size: "89 MB",
        downloads: 367,
      },
    ],
  },
  {
    zone: "Amhara Zone",
    resources: [
      {
        type: "pdf",
        title: "Teff Cultivation Best Practices",
        size: "4.3 MB",
        downloads: 521,
      },
      {
        type: "video",
        title: "Water Management Techniques",
        size: "56 MB",
        downloads: 412,
      },
    ],
  },
  {
    zone: "Tigray Zone",
    resources: [
      {
        type: "pdf",
        title: "Drought-Resistant Crops Guide",
        size: "3.9 MB",
        downloads: 297,
      },
      {
        type: "video",
        title: "Soil Conservation Methods",
        size: "72 MB",
        downloads: 245,
      },
    ],
  },
  {
    zone: "SNNPR Zone",
    resources: [
      {
        type: "pdf",
        title: "Spice Farming Handbook",
        size: "2.7 MB",
        downloads: 356,
      },
      {
        type: "video",
        title: "Cooperative Farming Models",
        size: "45 MB",
        downloads: 289,
      },
    ],
  },
  {
    zone: "Somali Zone",
    resources: [
      {
        type: "pdf",
        title: "Livestock Management Guide",
        size: "4.1 MB",
        downloads: 312,
      },
      {
        type: "video",
        title: "Pastoral Farming Techniques",
        size: "58 MB",
        downloads: 276,
      },
    ],
  },
];

// Reusable Components
const ResourceCard = ({
  title,
  description,
  image,
  width = 300,
  height = 200,
}) => (
  <Card
    hoverable
    style={{
      width: width,
      height: height,
      overflow: "hidden",
    }}
    cover={
      image && (
        <div style={{ height: "300px" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%", // <-- 2. Image fills its 200px container
              objectFit: "cover",
              objectPosition: "50% 0",
            }}
          />
        </div>
      )
    }
  >
    {description && <p>{description}</p>}
  </Card>
);

const Home = () => {
  const navigate = useNavigate();
  // Data for news cards
  const newsItems = [
    { id: 1, image: "../src/assets/image.png" },
    { id: 2, image: "../src/assets/im.png" },
    { id: 3, image: "../src/assets/img.png" },
  ];

  // Data for farmer cards
  const farmers = [
    {
      id: 1,
      name: "John Doe",
      image: "../src/assets/farmer1.png",
      description: "Top wheat producer",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "../src/assets/Farmer2.png",
      description: "Organic farming expert",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "../src/assets/Farmer3.png",
      description: "Sustainable agriculture pioneer",
    },
  ];

  return (
    <Layout>
      <Header style={headerStyle}>
        <Typography.Title level={4} style={{ color: "Green", margin: 0 }}>
          Agriculture Data Exchange
        </Typography.Title>
        <div className="flex gap-6">
          <a href="#">About us</a>
          <a href="#">Resources</a>
          <a href="#">Updates</a>
          <a href="#">Transparency</a>
          <Button
            type="primary"
            style={{ background: "green", color: "white", margin: "15px" }}
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
        </div>
      </Header>
      <Content style={contentStyle}>
        {/* Hero Section */}
        <div className="w-full h-[500px] bg-[url(../src/assets/hero1.png)] bg-cover bg-center">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black/50 p-6 gap-3">
            <Typography.Title level={2} style={{ color: "white", margin: 0 }}>
              Agriculture Data Exchange
            </Typography.Title>
            <Typography.Text
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "24px",
                textAlign: "center",
                fontFamily: "Inter",
              }}
            >
              A secure platform for sharing agricultural resources, training
              materials, and vital information between Zone Agriculture Offices
              and Kebele Offices
            </Typography.Text>
          </div>
        </div>

        {/* Economy Section */}
        <div className="mt-8">
          <h1 style={{ fontSize: "1.5rem", fontFamily: "sans-serif" }}>
            Economy of Ethiopia
          </h1>
        </div>

        <div className="flex items-start justify-between gap-30 h-120 mt-10">
          <Card
            hoverable
            style={{ width: 800, height: 400 }}
            cover={
              <img
                src="../src/assets/3.png"
                alt="Economy of Ethiopia"
                style={{ width: 800, height: 400, objectFit: "cover" }}
              />
            }
          />
          <div className="flex flex-col gap-6 max-w-2xl relative left-20">
            <h1 className="text-2xl font-bold">
              A Growing Economy Rooted in Agriculture
            </h1>
            <p className="text-[17px]">
              Ethiopia's economy is one of the fastest-growing in Africa, with
              agriculture serving as its cornerstone. The sector employs over
              70% of the population and contributes significantly to exports,
              foreign exchange earnings, and industrial raw material supply.
            </p>
            <p className="text-[17px]">
              Major agricultural exports include coffee, oilseeds, pulses,
              flowers, and livestock. The government has prioritized
              agricultural transformation as a key driver of economic
              development, focusing on productivity enhancement, value chain
              development, and market linkages.
            </p>
            <p className="text-[17px]">
              Through platforms like the Agriculture Data Exchange, we are
              strengthening information flow between administrative levels,
              enabling data-driven decision making, and supporting the
              transition to modern, sustainable agricultural practices that will
              drive continued economic growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-10">
          {/* GDP Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 duration-100 ">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-full mr-3">
                <DollarOutlined className="text-green-600 text-xl" />
              </div>
              <h3 className="text-gray-600 font-medium">GDP</h3>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">$111.3B</h2>
            <p className="text-sm text-gray-500">2023 Estimate</p>
          </div>

          {/* Population Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 duration-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <TeamOutlined className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-gray-600 font-medium">Population</h3>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">126.5M</h2>
            <p className="text-sm text-gray-500">2023 Estimate</p>
          </div>

          {/* Agriculture Share Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 duration-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 rounded-full mr-3">
                <RiseOutlined className="text-yellow-600 text-xl" />
              </div>
              <h3 className="text-gray-600 font-medium">Agriculture Share</h3>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">37%</h2>
            <p className="text-sm text-gray-500">of GDP</p>
          </div>

          {/* Economy Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 duration-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-full mr-3">
                <TrophyOutlined className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-gray-600 font-medium">Largest Economy</h3>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              In East Africa
            </h2>
            <p className="text-sm text-gray-500">By GDP (PPP)</p>
          </div>
        </div>

        {/* Resources Section */}
        <div className="w-full max-w-7xl px-4 mt-16">
          <h1 className="text-2xl font-sans mb-8">
            Resources from Zone Agriculture Offices
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zoneResources.map((zoneData, index) => (
              <Card
                key={index}
                title={zoneData.zone}
                style={{ width: "100%", marginBottom: "24px" }}
                headStyle={{ backgroundColor: "#fafafa", fontWeight: "bold" }}
              >
                <div className="space-y-3">
                  {zoneData.resources.map((resource, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-md ${
                          resource.type === "pdf"
                            ? "bg-blue-50 text-blue-500"
                            : resource.type === "video"
                            ? "bg-green-50 text-green-500"
                            : "bg-purple-50 text-purple-500"
                        }`}
                      >
                        {resource.type === "pdf"
                          ? "📄"
                          : resource.type === "video"
                          ? "🎥"
                          : "🖼️"}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="font-medium text-gray-800">
                          {resource.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {resource.size} • {resource.downloads} downloads
                        </div>
                      </div>
                      <Button
                        type="text"
                        icon={<DownloadOutlined className="text-gray-500" />}
                        className="text-gray-400 hover:text-gray-600"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest News Section */}
        <div className="w-full max-w-7xl px-4 mt-16">
          <h1 className="text-2xl font-sans mb-8">Latest News and Updates</h1>
          <div className="flex flex-wrap gap-6 justify-center">
            {newsItems.map((item, index) => (
              <ResourceCard
                key={item.id || index}
                title={item.title || "News Title"}
                description={
                  item.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
                image={item.image}
                width={350}
                height={400}
              />
            ))}
          </div>
        </div>

        {/* Top Farmers Section */}
        <div className="w-full max-w-7xl px-4 mt-16 my-16">
          <h1 className="text-2xl font-sans mb-8">Top Farmers</h1>
          <div className="flex flex-wrap gap-6 justify-center">
            {farmers.map((farmer, index) => (
              <ResourceCard
                key={farmer.id || index}
                title={farmer.name}
                description={farmer.description}
                image={farmer.image || "../src/assets/farmer1.png"}
                width={350}
                height={400}
              />
            ))}
          </div>
        </div>
      </Content>

      <Footer style={footerStyle}>
        <div className="grid grid-cols-3 gap-10 justify-items-center mt-50 w-full max-w-6xl mx-auto p-24">
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Contact us</h2>
            <p>123 Main St, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 911 123 456</p>
            <p>Email: info@farmiq.et</p>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div>FarmIQ ©2025 Created by FarmIQ</div>
      </Footer>
    </Layout>
  );
};

export default Home;
