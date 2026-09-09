"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";

interface Doc {
  pageContent?: string;
  metadata?: {
    loc?: {
      pageNumber?: number;
    };
    source?: string;
  };
}

interface IMessage {
  role: "assistant" | "user";
  content: string;
  documents?: Doc[];
}

const ChatComponent: React.FC = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [loading, setLoading] = React.useState(false);

  console.log(messages);

  const handleSendChatMessage = async () => {
    const userMessage = message.trim();

    if (!userMessage || loading) return;

    // Immediately show user's message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/chat?message=${encodeURIComponent(userMessage)}`
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data?.message || "No response received.",
          documents: data?.docs || [],
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while processing your question.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendChatMessage();
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {messages.length === 0 && (
            <div className="flex h-full min-h-[400px] items-center justify-center text-center text-gray-400">
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-700">
                  Ask questions about your PDF
                </h2>
                <p className="text-sm">
                  Upload a PDF and start chatting with your document.
                </p>
              </div>
            </div>
          )}

          {messages.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                  item.role === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <div className="mb-1 text-xs font-semibold opacity-60">
                  {item.role === "user" ? "You" : "AI Assistant"}
                </div>

                <div className="whitespace-pre-wrap text-sm leading-6">
                  {item.content}
                </div>

                {/* Optional source information */}
                {item.role === "assistant" &&
                  item.documents &&
                  item.documents.length > 0 && (
                    <div className="mt-3 border-t border-gray-300 pt-2 text-xs text-gray-500">
                      Sources: {item.documents.length} relevant section
                      {item.documents.length > 1 ? "s" : ""} found
                    </div>
                  )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-500">
                AI is thinking...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      <div className="fixed bottom-0 right-0 z-10 w-1/2 border-t bg-white p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about your PDF..."
            disabled={loading}
          />

          <Button
            onClick={handleSendChatMessage}
            disabled={!message.trim() || loading}
          >
            {loading ? "..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
