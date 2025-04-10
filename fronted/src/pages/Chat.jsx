import { useState } from "react";
import { SendHorizonal, MoreVertical } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "Aman", content: "Hey about (Flagraphy)." },
    { sender: "You", content: "nmn...dc lk.ab.a eoel" },
    { sender: "Aman", content: "Check dead onion!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "You", content: input }]);
    setInput("");
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-md mx-auto p-4 bg-gradient-to-br from-[#2575FC] to-[#e9e6eb] shadow-xl rounded-2xl flex flex-col h-[600px]">
        <div className="flex items-center justify-between border-b pb-3 border-white/30">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Aman"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div className="text-white">
              <p className="font-semibold">Aman</p>
              <p className="text-xs opacity-70">Online</p>
            </div>
          </div>
          <MoreVertical className="text-white" />
        </div>
        <div className="flex-1 overflow-y-auto mt-3 space-y-3 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl px-4 py-2 text-sm max-w-[70%] ${
                  msg.sender === "You"
                    ? "bg-white text-gray-900"
                    : "bg-white/30 text-white backdrop-blur-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            className="flex-1 px-4 py-2 border border-white/30 bg-white/20 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={sendMessage}
            className="bg-white text-[#2575FC] p-2 rounded-full hover:bg-gray-100"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
           
      </div>
      <Footer />
    </>
  );
}
