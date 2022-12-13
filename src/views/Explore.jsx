import React from "react";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";
import { MdMoreHoriz } from "react-icons/md";

const Explore = () => {
  const [trending] = useGlobalState("trending");
  const [follow] = useGlobalState("follow");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="w-5/6 md:w-3/5 border-r border-slate-200">
        <Trending />
        <div className="p-4 my-1 border-y border-slate-200">
          <h1 className="text-xl font-bold">Trends for you</h1>
          {trending.map((trend, i) => (
            <Trends key={i} trendProp={trend} />
          ))}
        </div>
      </div>
      <div className="p-6 w-2/5 hidden md:block">
        <div className="bg-gray-100 p-4 rounded-2xl">
          <h1 className="text-xl font-bold">Who to follow</h1>
          {follow.map((follow, i) => (
            <Follow key={i} followProp={follow} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div>
      <img src="" alt="" className="w-full" />
      <div className='bg-[url("https://pbs.twimg.com/semantic_core_img/1595461138900307970/Oyg9PoAd?format=jpg&name=240x240")] h-80 w-full bg-no-repeat bg-cover bg-center flex flex-col justify-end p-2 text-white'>
        <p className="text-xs">Sports ·LIVE</p>
        <h4 className="text-xl capitalize font-black ">FIFA world cup</h4>
      </div>
    </div>
  );
};

const Trends = ({ trendProp }) => {
  return (
    <div className="flex justify-between my-5">
      <div>
        <p className="text-gray-500 font-medium text-xs">
          {trendProp.trendHeader}
        </p>
        <h4 className="text-sm font-semibold text-gray-800">
          {trendProp.trend}
        </h4>
        <p className="text-gray-500 text-xs">{trendProp.tweets} tweets</p>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-xl" />
    </div>
  );
};

export function Follow({ followProp }) {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex items-center space-x-2">
        <img src={followProp.image} alt="" className="w-14 rounded-full" />
        <div>
          <h4 className="text-md font-bold text-gray-900">
            {followProp.userName}
          </h4>
          <p className="text-gray-500 text-md">{followProp.userAccount}</p>
        </div>
      </div>
      <div>
        <button className="font-bold p-2 px-4 bg-black text-white rounded-full text-sm">
          Follow
        </button>
      </div>
    </div>
  );
}
export default Explore;
