import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { useGlobalState } from "../store";

const AsidePage = () => {
  const [trending] = useGlobalState("trending");
  const [follow] = useGlobalState("follow");
  return (
    <div className="w-2/5 px-10 space-y-4 hidden md:block">
      <SearchBar />
      <div className="bg-gray-100 p-4 rounded-2xl">
        <h1 className="text-xl font-bold text-gray-800">Whats Happening</h1>
        <WhatsHappening />
        <div className="my-6">
          {trending.map((trend, i) => (
            <Trends key={i} trendProp={trend} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-2xl">
        <h1 className="text-xl font-bold text-gray-800">Who to follow</h1>
        <div className="">
          {follow.map((follow, i) => (
            <Follow key={i} followProp={follow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export function SearchBar() {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center space-x-3 text-gray-500 font-medium">
      <FaSearch />
      <p> Search Twitter</p>
    </div>
  );
}

const WhatsHappening = () => {
  return (
    <div className="flex justify-between my-5">
      <div>
        <p className="capitalize text-gray-500 font-medium text-sm">
          fifa world cup starts on November
        </p>
        <h4 className="text-md font-semibold text-gray-800">England vs USA</h4>
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/semantic_core_img/1595461138900307970/Oyg9PoAd?format=jpg&name=240x240"
          alt=""
          className="w-24 rounded-lg"
        />
      </div>
    </div>
  );
};

export function Trends({ trendProp }) {
  return (
    <div className="flex justify-between my-5">
      <div>
        <p className="text-gray-500 font-medium text-sm">
          {trendProp.trendHeader}
        </p>
        <h4 className="text-md font-semibold text-gray-800">
          {trendProp.trend}
        </h4>
        <p className="text-gray-500 font-medium text-sm">
          {trendProp.tweets} tweets
        </p>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-xl" />
    </div>
  );
}

const Follow = ({ followProp }) => {
  return (
    <div className="flex justify-between items-center my-6 w-full">
      <div className="flex space-x-4">
        <img
          src={followProp.image}
          alt=""
          className="w-12 h-12 object-contain rounded-full"
        />
        <div>
          <h4 className="text-md font-bold text-gray-900">
            {followProp.userName}
          </h4>
          <p className="text-gray-500 font-semibold text-sm">
            {followProp.userAccount}
          </p>
        </div>
      </div>
      <div>
        <button className="px-6 font-bold p-1 bg-black text-white rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default AsidePage;
