import React, { useState } from "react";
import { Message } from "./Message";
import { messages as initialMessages } from "../../../assets/data";

export const MessageChats: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState(initialMessages);

  const filterMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = initialMessages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(value) ||
        msg.message.toLowerCase().includes(value)
    );

    setFilteredMessages(filtered);
  };

  return (
    <aside className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-8 mx-auto w-full text-base leading-6 bg-white shadow-sm max-md:px-5 border border-r-gray-300">
        <div className="flex gap-4 px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e9983c0acab107856d961473e4559d6203ac4cc57c28280979cbaa8af6a254b?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
            alt=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <label htmlFor="searchMessages" className="sr-only">
            Search messages
          </label>
          <input
            id="searchMessages"
            type="text"
            value={searchTerm}
            onChange={filterMessage}
            placeholder="Search messages"
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>
        {filteredMessages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
      </div>
    </aside>
  );
};
