"use client";

import { useState } from "react";

import { Header } from "./header";

export const ChatUI = () => {
  const [userMessage, setUsermessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiMessage, setAImessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const prompt = formData.get("message");

    const prompt = [
      {
        role: "system",
        content:
          "You are an AI Assistant who is Hendersen's employee.  Hendersen provides the following services.  Corporate Tax, Merger & Acquisition, Investment Advisory, Outsourcing, Human Capital, Customs & Trade, Transfer Pricing, High Net Worth, AI Integration.  You will help the user to understand Hendersen.  Answer in the same language of the user.",
      },

      { role: "user", content: userMessage },
    ];

    if (prompt.length === 0 || isLoading) return;

    setIsLoading(true);

    const response = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify(prompt),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAImessage(response.text());

    setIsLoading(false);
  };

  return (
    <div className="w-[350px] bg-slate-800 rounded-lg overflow-hidden text-slate-400 p-5 gap-5 flex flex-col border border-blue-800/40 shadow-2xl shadow-blue-900/30 text-xs">
      <Header />
      <div className="text-slate-50 max-h-[50vh] overflow-y-auto">
        {aiMessage}
      </div>

      <form
        className="bg-slate-900 -mx-5 -mb-5 p-5 flex gap-0 items-center"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          autoComplete="off"
          name="message"
          required
          className=" bg-transparent rounded-md flex-1 max-h-56 w-64 text-slate-50 focus:ring-0 focus:outline-none"
          placeholder="Type your message here..."
          onChange={(e) => setUsermessage(e.target.value)}
        ></input>
        <button
          type="submit"
          className="hover:bg-slate-600 cursor-pointer outline outline-1 outline-offset-4 outline-slate-800 text-white items-center border border-x-slate-700 border-b-slate-700 border-t-slate-600 bg-slate-700 shadow-md justify-center flex rounded-xl p-4"
        >
          {isLoading ? "⏳" : "🚀"}
        </button>
      </form>
    </div>
  );
};
