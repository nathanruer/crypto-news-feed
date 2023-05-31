'use client';

import { Message } from "../types/Message";
import { useState } from "react";
import NewsCard from "./NewsCard";
import useWebSocket from "../hooks/useWebsocket";
import NewsContainer from "./NewsContainer";

interface NewsFeedProps {
  messages: Message[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ messages }) => {
  const [currentMessages, setCurrentMessages] = useState<Message[]>(messages);

  const handleNewMessage = (newMessage: Message) => {
    setCurrentMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  useWebSocket("wss://news.treeofalpha.com/ws", handleNewMessage);

  return (
    <NewsContainer>
      <div>
        {currentMessages.map((message, index) => (
          <div key={index}>
            {message.url && (
              <NewsCard
                title={message.title}
                body={message.body}
                source={message.url}
                time={message.time}
              />
            )}

            {message.link && (
              <NewsCard
                title={message.title}
                body={message.body}
                source={message.link}
                time={message.time}
              />
            )}
          </div>
        ))}
      </div>
    </NewsContainer>
  );
};

export default NewsFeed;
