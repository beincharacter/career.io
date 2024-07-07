import React, { useState } from "react";
import { MessageChats } from "../components/MessageChats";
import { UserMessage } from "../components/UserMessage";

interface Message {
  message: string;
  time: string;
  icon: string;
  isAdmin: boolean;
  name: string;
}

export const MessagesArea: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
    {
      message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview",
      time: "12 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: false,
      name: "You",
    },
    {
      message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      time: "10 mins ago",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      isAdmin: true,
      name: "Jan Mayer",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: newMessage,
          time: "just now",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
          isAdmin: false,
          name: "You",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex gap-0 max-md:flex-col max-md:gap-0 h-screen">
        <MessageChats />
        <main className="flex flex-col border-l-0 w-[64%] max-md:ml-0 h-screen">
          <div className="flex flex-col grow self-stretch relative h-screen">
            <header className="justify-between px-8 pt-7 pb-6 bg-white shadow-sm max-md:px-5 max-md:max-w-full border border-gray-300">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-4 justify-center max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d9313c8036eaee74a380c348dcade686000cf8ef39192b8e56b8740a9611af?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                      alt="Jan Mayer's avatar"
                      className="shrink-0 w-14 aspect-square"
                    />
                    <div className="flex flex-col my-auto">
                      <div className="text-xl font-semibold leading-6 text-slate-800">Jan Mayer</div>
                      <div className="mt-1 text-base leading-6 text-slate-600">Designer Candidate</div>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 justify-between items-start py-3 text-base font-bold leading-6 text-center text-indigo-600 max-md:mt-10">
                    <button aria-label="Call">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/edbbb5de12986b1ab62585bae7c53b67d59c98cbc259e16858458e40e0c73005?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        alt=""
                        className="shrink-0 w-6 aspect-square"
                      />
                    </button>
                    <button aria-label="Video call">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f701701251df611156aaff80278f31dcc17cb5c4434630126a4e753d8894d8b7?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        alt=""
                        className="shrink-0 w-6 aspect-square"
                      />
                    </button>
                    <button aria-label="Share">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4bd2c03cb3b1cf18ca5cd5633fe40d7ba4a9fb2483214fb667a31657ec5b01?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        alt=""
                        className="shrink-0 w-6 aspect-square"
                      />
                    </button>
                    <button>View Profile</button>
                  </div>
                </nav>
              </div>
            </header>
            <div className="flex flex-col grow overflow-y-auto mb-16">
              {messages.map((msg, index) => (
                <UserMessage
                  key={index}
                  message={msg.message}
                  time={msg.time}
                  icon={msg.icon}
                  isAdmin={msg.isAdmin}
                  name={msg.name}
                />
              ))}
            </div>
            <form
              className="sticky bottom-0 flex gap-5 justify-between py-2 pr-2 pl-4 bg-white border border-solid border-zinc-200 max-md:flex-wrap"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <div className="flex gap-4 my-auto text-base leading-6 text-slate-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a74073f057f792283add11b63f80e3ec7786e8b897e0c155aaade8e0670ce3?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
                <label htmlFor="replyMessage" className="sr-only">Reply message</label>
                <input
                  id="replyMessage"
                  type="text"
                  placeholder="Reply message"
                  className="flex-auto my-auto bg-transparent border-none focus:outline-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <button aria-label="Attach file">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd65b3b88249e0399e01f2eda41f2bf4309a5b12a4b6218dfdaf98f49fb48cb?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    alt=""
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </button>
                <button aria-label="Send message" className="flex justify-center items-center p-2.5 bg-indigo-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5292cb6e55298596b2550873af72b2aa9efce12f97d8d43a2aab8d502bc7ae?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    alt=""
                    className="w-5 aspect-square"
                  />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessagesArea;
