import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GiDiamonds } from "react-icons/gi";
import { SearchBar, Trends } from "../components/AsidePage";
import { Reactions } from "../components/MainPage";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";

const Notifications = () => {
  const [trending] = useGlobalState("trending");
  const [notification] = useGlobalState("notification");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="w-5/6 md:w-3/5 border-x border-slate-200">
        <header className="p-5 flex justify-between items-center">
          <div className="flex items-center space-x-4 font-bold text-lg">
            <AiOutlineArrowLeft />
            <h1>Notifications</h1>
          </div>
          <FiSettings />
        </header>
        <div className="flex justify-between mx-10 my-5 text-sm text-gray-500 font-semibold ">
          <p>All</p>
          <p>Verified</p>
          <p>Mentioned</p>
        </div>
        {notification.map((p,i) =>(
          <div key={i}>
            {p.type == "postNotifications" ? (
              <PostNotifications p={p} />
            ) : p.type == "followedNotifications" ? (
              <FollowedNotifications p={p} />
            ) : (
              <RepliedNotifications p={p} />
            )}

          </div>
        ))}
      </div>
      <div className="p-6 w-2/5 hidden md:block">
        <div>
          <SearchBar />
          <div className="my-6 bg-gray-100 p-4 rounded-2xl">
            <h1 className="text-xl font-bold text-gray-800">Trends for you</h1>
            {trending.map((trend, i) => (
              <Trends key={i} trendProp={trend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const RepliedNotifications = ({p}) => (
  <div className="border-y border-slate-200 p-2 px-6 flex space-x-2">
    <img src={p.image} className="w-8 h-8 object-cover rounded-full" />
    <div className="w-3/4">
      <h2 className="font-bold text-xs">
        {p.userName}
        <span className="text-gray-500">
          {p.userAccount} {p.time}
        </span>
      </h2>
      <p className="text-slate-400 text-xs">
        Repling to <span className="text-sky-500 font-medium">@Chenemi_U</span>
      </p>
      <p className="text-sm">{p.comment}</p>
      <Reactions p={p} />
    </div>
  </div>
);

const FollowedNotifications = ({p}) => (
  <div className="border-y border-slate-200 p-2 px-6">
    <div className="flex space-x-4">
      <BsPersonFill className="text-3xl text-blue-500" />
      <img
        src={p.image}
        alt=""
        className="w-8 object-cover rounded-full"
      />
    </div>
    <p className="font-bold text-gray-800 text-sm">
      {p.userName}
      <span className="font-normal">followed you</span>
    </p>
  </div>
);

const PostNotifications = ({p}) => (
  <div className="border-y border-slate-200 p-2 px-6">
    <div className="flex space-x-4">
      <GiDiamonds className="text-3xl text-purple-500" />
      <img
        src={p.image}
        alt=""
        className="w-8 object-cover rounded-full"
      />
    </div>
    <p className="font-bold text-gray-800 text-sm">
      {p.userName}
      <span className="font-normal">
       {p.description}
      </span>
    </p>
  </div>
);

const Replies = ({ user }) => {
  return (
    <div>
      {user.map((p, i) => (
        <div>
          <div className="border-y border-slate-200 p-2 px-6 flex space-x-2">
            <img src={p.image} className="w-8 h-8 object-cover rounded-full" />
            <div className="w-3/4">
              <h2 className="font-bold text-xs">
                {p.userName}
                <span className="text-gray-500">
                  {p.userAccount} {p.time}
                </span>
              </h2>
              <p className="text-slate-400 text-xs">
                Repling to
                <span className="text-sky-500 font-medium">@Chenemi_U</span>
              </p>
              <p className="text-sm">Great job</p>
              <Reactions p={p} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
