import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual Gemini API key (get it from https://ai.google.dev/)
const API_KEY = "AIzaSyDlm29QUVcza7s_y78WG2K5w92nEzR51J8"; // Example key (REPLACE THIS)
const genAI = new GoogleGenerativeAI(API_KEY);

const MyChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = result.response.text();

      const botMessage = { text: response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const botError = {
        text: "⚠️ Gemini failed to respond. Please try again later.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botError]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 text-white p-4 flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-500 mr-3">
            🤖
          </div>
          <h2 className="text-lg font-semibold">My ChatBot</h2>
        </div>

        {/* Chat Area */}
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {msg.sender === "bot" && (
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">
                  🤖
                </div>
              )}
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800"
                    : "bg-indigo-500 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">
                🤖
              </div>
              <div className="max-w-xs px-4 py-2 rounded-2xl bg-white text-gray-800 shadow">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="ml-3 p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyChatbot;