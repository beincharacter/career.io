import { Message } from "../components/Message";
import { UserMessage } from "../components/UserMessage";

type MessageProps = {
    avatar: string;
    name: string;
    time: string;
    message: string;
    isSelected?: boolean;
};

export const MessagesArea: React.FC = () => {
    const messages: MessageProps[] = [
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Jan Mayer", time: "12 mins ago", message: "We want to invite you for a qui...", isSelected: true },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4a6c336fa9696161a5be4789ac86492048c1d631da67314f9c76bc6d582d93f?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Joe Bartmann", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac6ade2b0b602652a9647471ab58d2e4390fa73b189df8360bf2b5c453af621d?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Ally Wales", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f81875e08a98e98e280a72bcd32234891a1903a80d34ebe953afaf06a27b1ef2?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "James Gardner", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f750f43511198d8567e10c3ecd4a2daee99aaf7020a01fdd07af02c3521b9d49?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Allison Geidt", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/114446315d0bd9ed78f88dd647c32d41ed2b95f291dfd5816a35a7669487e995?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Ruben Culhane", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/50cf2feed63b1b1b5381eb3986ad1afc35b9aa58e952e4d0e239844929ee924f?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Lydia Diaz", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf07260f9df17042541ea51e46ea254301a037686599cb1f30c8e19060948754?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "James Dokidis", time: "3:40 PM", message: "Hey thanks for your interview..." },
        { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/5379c8da0be6f0b91688c32cf1d06cb9c9153ac3f3c6a948ddc2111b8b2effe1?apiKey=9930d1395d354fadb15c776dbd7b25f4&", name: "Angelina Swann", time: "3:40 PM", message: "Hey thanks for your interview..." },
    ];

    return (
        <div className="bg-white">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <aside className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow p-8 mx-auto w-full text-base leading-6 bg-white shadow-sm max-md:px-5 border border-r-gray-300">
                        <div className="flex gap-4 px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e9983c0acab107856d961473e4559d6203ac4cc57c28280979cbaa8af6a254b?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                            <label htmlFor="searchMessages" className="sr-only">Search messages</label>
                            <input id="searchMessages" type="text" placeholder="Search messages" className="w-full bg-transparent border-none focus:outline-none" />
                        </div>
                        {messages.map((msg, index) => (
                            <Message key={index} {...msg} />
                        ))}
                    </div>
                </aside>
                <main className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch pb-7 max-md:max-w-full">
                        <header className="justify-between px-8 pt-7 pb-6 bg-white shadow-sm max-md:px-5 max-md:max-w-full border border-gray-300">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                                    <div className="flex grow gap-4 justify-center max-md:mt-10">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d9313c8036eaee74a380c348dcade686000cf8ef39192b8e56b8740a9611af?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Jan Mayer's avatar" className="shrink-0 w-14 aspect-square" />
                                        <div className="flex flex-col my-auto">
                                            <div className="text-xl font-semibold leading-6 text-slate-800">Jan Mayer</div>
                                            <div className="mt-1 text-base leading-6 text-slate-600">Designer Candidate</div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                                    <div className="flex grow gap-5 justify-between items-start py-3 text-base font-bold leading-6 text-center text-indigo-600 max-md:mt-10">
                                        <button aria-label="Call"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/edbbb5de12986b1ab62585bae7c53b67d59c98cbc259e16858458e40e0c73005?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-6 aspect-square" /></button>
                                        <button aria-label="Video call"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f701701251df611156aaff80278f31dcc17cb5c4434630126a4e753d8894d8b7?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-6 aspect-square" /></button>
                                        <button aria-label="Share"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4bd2c03cb3b1cf18ca5cd5633fe40d7ba4a9fb2483214fb667a31657ec5b01?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-6 aspect-square" /></button>
                                        <button>View Profile</button>
                                    </div>
                                </nav>
                            </div>
                        </header>
                        <section className="flex flex-col items-center p-8 text-center bg-white max-md:px-5 max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e8aa01e4c859d114392c6a85d32086e32d967548388d796b2bdd4be7feff4c?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Jan Mayer's profile picture" className="aspect-square w-[88px]" />
                            <h2 className="mt-2 text-2xl font-semibold leading-7 text-gray-800">Jan Mayer</h2>
                            <p className="mt-2 text-base leading-6 text-slate-600">Designer candidate</p>
                        </section>
                        <div className="flex justify-center items-center px-8 pb-4 text-base font-medium leading-6 whitespace-nowrap text-slate-800 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-2 justify-center px-4 py-3 bg-white border border-solid shadow-2xl border-zinc-200">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/094d56e22dd1b07143c6e0b7804b4e8167234f7715ffe38b80659cd99184a939?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                                <span>Today</span>
                            </div>
                        </div>
                        <UserMessage
                            message="Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. We want to invite you for a quick interview"
                            time="12 mins ago"
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c4ccdbe69a7b23e8a7512d91ddc1295ed6017a64823f71bdf59541ca7bf7c2db?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                            isAdmin={false}
                            name="You"
                        />

                        <UserMessage
                            message="Hi Maria, sure I would love to. Thanks for taking the time to see my work!"
                            time="10 mins ago"
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/16a89d36d4315c3da3e41e0dd5be3ea94c375c676813d2e492f8778e2357ce62?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                            isAdmin={true}
                            name="Jan Mayer"
                        />
                        <form className="flex gap-5 justify-between py-2 pr-2 pl-4 mx-8 mt-16 bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                            <div className="flex gap-4 my-auto text-base leading-6 text-slate-500">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a74073f057f792283add11b63f80e3ec7786e8b897e0c155aaade8e0670ce3?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-6 aspect-square" />
                                <label htmlFor="replyMessage" className="sr-only">Reply message</label>
                                <input id="replyMessage" type="text" placeholder="Reply message" className="flex-auto my-auto bg-transparent border-none focus:outline-none" />
                            </div>
                            <div className="flex gap-4">
                                <button aria-label="Attach file"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd65b3b88249e0399e01f2eda41f2bf4309a5b12a4b6218dfdaf98f49fb48cb?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 my-auto w-6 aspect-square" /></button>
                                <button aria-label="Send message" className="flex justify-center items-center p-2.5 bg-indigo-600">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5292cb6e55298596b2550873af72b2aa9efce12f97d8d43a2aab8d502bc7ae?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="w-5 aspect-square" />
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