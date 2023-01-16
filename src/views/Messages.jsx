import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";

const Messages = () => {
  const [user] = useGlobalState("user");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="px-5 w-5/6 md:w-3/5 border-x border-slate-200 text-center">
        <header className="flex justify-between items-center">
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-lg">Messages</h1>
            <div className="flex space-x-4 text-lg">
              <FiSettings />
              <BiMessageAltDetail />
            </div>
          </div>
        </header>
        <div className="p-2 rounded-full flex items-center justify-center space-x-3 text-gray-500 font-medium border border-gray-500 mt-4">
          <FaSearch />
          <p>Search Direct Messages </p>
        </div>
        <div className="">
          {user.map((p, i) => (
            <div
              className="flex space-x-4 border-b border-slate-200 p-4"
              key={i}
            >
              <div>
                <img
                  src={p.image}
                  alt=""
                  className="w-12 object-contain rounded-full"
                />
              </div>
              <div>
                <div className="flex">
                  <h1 className="font-bold text-gray-800">{p.userName} </h1>
                  <p className="text-gray-500 ">
                    {p.userAccount} {p.time}
                  </p>
                  <
                </div>
                <p className="text-gray-600 text-md font-medium">
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 w-2/5 hidden md:block">
        <div className="flex items-center h-screen">
          <div>
            <h1 className="font-bold text-2xl">Select a message</h1>
            <p className="text-sm text-gray-500 mb-4">
              Choose from your existing conversations, start a new one, or just
              keep swimming.
            </p>
            <button className="px-5 mb-20 p-2 bg-sky-500 text-white font-medium rounded-full hidden md:flex">
              New Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
