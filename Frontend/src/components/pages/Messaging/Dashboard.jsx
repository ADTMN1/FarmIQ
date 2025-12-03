import React, { useState } from "react";

const Messaging = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there!", type: "received" },
    { text: "Hello! This is a message at the end.", type: "sent" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add message to list
    setMessages([...messages, { text: input, type: "sent" }]);

    // Clear input
    setInput("");
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto mt-10 mb-10 p-4 bg-gray-100 rounded-2xl shadow-md h-[600px]">
      
      {/* Messages (scrollable) */}
      <div className="flex flex-col gap-4 overflow-y-auto pb-4 flex-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow max-w-xs ${
              msg.type === "sent"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow mt-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
        />

        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messaging;
