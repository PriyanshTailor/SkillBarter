import React, { useState } from "react";

// Example data, replace with API data later
const requests = [
  {
    id: 1,
    name: "Alice Johnson",
    skill: "Graphic Design for UI/UX Feedback",
    status: "Accepted",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Bob Williams",
    skill: "Content Writing for Social Media",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // ...more requests
];

const initialMessages = [
  {
    sender: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Hi Alice Johnson, I saw your request for Graphic Design for UI/UX Feedback coaching. I'd be happy to help!",
    time: "10:05 AM",
    type: "text",
    mine: false,
  },
  {
    sender: "me",
    text: "That's great! I'm really looking forward to it. What's your availability like this week?",
    time: "10:07 AM",
    type: "text",
    mine: true,
  },
  {
    sender: "Alice Johnson",
    text: "I'm free on Tuesday afternoon or Thursday morning. Does either of those work for you?",
    time: "10:11 AM",
    type: "text",
    mine: false,
  },
  {
    sender: "me",
    text: "Here's a screenshot of my calendar too for reference.",
    time: "10:12 AM",
    type: "image",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    mine: true,
  },
  {
    sender: "me",
    text: "Video call - 3 minutes, 20 seconds",
    time: "10:30 AM",
    type: "call",
    mine: true,
  },
  {
    sender: "me",
    text: "Just finished our video call! It was very productive. Let's confirm the session for Tuesday.",
    time: "10:35 AM",
    type: "text",
    mine: true,
  },
  {
    sender: "me",
    text: "BarterAgreement.pdf",
    time: "10:40 AM",
    type: "file",
    file: "BarterAgreement.pdf",
    mine: true,
  },
  {
    sender: "me",
    text: "I've attached the draft barter agreement for your review. Please let me know if everything looks good.",
    time: "10:41 AM",
    type: "text",
    mine: true,
  },
];

const BarterChat = () => {
  const [selectedRequest, setSelectedRequest] = useState(requests[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          sender: "me",
          text: input,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "text",
          mine: true,
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex h-full">
      {/* Requests Sidebar */}
      <div className="w-80 border-r bg-white p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Barter Requests</h2>
          <button className="bg-[#190a64] text-white px-3 py-1 rounded">+ New Request</button>
        </div>
        <ul className="flex-1 overflow-y-auto">
          {requests.map((req) => (
            <li
              key={req.id}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer mb-2 ${selectedRequest.id === req.id ? "bg-gray-100" : ""}`}
              onClick={() => setSelectedRequest(req)}
            >
              <img src={req.avatar} alt={req.name} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="font-semibold">{req.name}</div>
                <div className="text-xs text-gray-500">{req.skill}</div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${req.status === "Accepted" ? "bg-[#190a64] text-white" : req.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}>
                {req.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="flex items-center border-b px-6 py-4">
          <img src={selectedRequest.avatar} alt={selectedRequest.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-semibold">{selectedRequest.name}</div>
            <div className="text-xs" style={{ color: '#190a64' }}>Online</div>
          </div>
        </div>
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-lg ${msg.mine ? "bg-[#190a64] text-white" : "bg-white text-gray-900"} rounded-lg p-3 shadow`}>
                {msg.type === "text" && <div>{msg.text}</div>}
                {msg.type === "image" && (
                  <img src={msg.image} alt="attachment" className="rounded-lg mb-2 max-w-xs" />
                )}
                {msg.type === "file" && (
                  <a href="#" className="underline text-blue-600">{msg.file}</a>
                )}
                {msg.type === "call" && (
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="call">📞</span>
                    <span>{msg.text}</span>
                  </div>
                )}
                <div className="text-xs text-right mt-1 opacity-70">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Chat Input */}
        <div className="border-t px-6 py-4 flex items-center gap-2 bg-white">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <button className="bg-[#190a64] text-white px-4 py-2 rounded" onClick={handleSend}>
            Send
          </button>
          <button className="border px-4 py-2 rounded">Confirm Barter Completion</button>
        </div>
      </div>
    </div>
  );
};

export default BarterChat;