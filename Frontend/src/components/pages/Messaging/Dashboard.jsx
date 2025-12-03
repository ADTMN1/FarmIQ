import { Avatar, Table } from "antd";
import React, { useState } from "react";

const Messaging = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there!", type: "received" },
    { text: "Hello! This is a message at the end.", type: "sent" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, type: "sent" }]);
    setInput("");
  };

  return (
    <div className="w-full flex justify-between p-8 gap-20">

      {/* LEFT SIDE — Kebele List */}
      <div className="w-1/3 bg-white p-6 rounded-2xl shadow-md h-[600px] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Kebele Lists</h2>
        <KebeleLists />
      </div>

      {/* RIGHT SIDE — Chat */}
      <div className="w-2/3 flex flex-col bg-white p-6 rounded-2xl shadow-md h-[600px]">
        
        {/* Chat Messages */}
        <div className="flex flex-col gap-4 overflow-y-auto flex-1 pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-sm max-w-xs ${
                msg.type === "sent"
                  ? "self-end bg-blue-600 text-white"
                  : "self-start bg-gray-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl shadow-inner mt-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
          />

          <button
            onClick={handleSend}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// TABLE COLUMNS
const cols = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
    render: () => <Avatar type="primary">U</Avatar>,
    width: 80,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
];

// TABLE DATA
const data = [
  {
    profile: <Avatar type="primary">U</Avatar>,
    username: "John Doe",
    key: "1",
  },
];

// LEFT SIDE COMPONENT
const KebeleLists = () => {
  return (
    <div className="w-full">
      <Table
        columns={cols}
        dataSource={data}
        pagination={false}
        className="rounded-lg"
      />
    </div>
  );
};

export default Messaging;
