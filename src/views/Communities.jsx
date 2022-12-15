import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Trends } from "../components/AsidePage";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";

const Communities = () => {
  const [trending] = useGlobalState("trending");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="p-5 w-5/6 md:w-2/5 border-r border-slate-200">
        <header className="flex justify-between">
          <div className="flex items-center space-x-4 font-bold text-lg">
            <AiOutlineArrowLeft />
            <h1>Communities</h1>
          </div>
          <BsSearch />
        </header>
      </div>
      <div className="p-5 w-1/3">
        <label class="relative block ">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-600 focus:text-sky-500">
            <BsSearch />
          </span>
          <input
            class="placeholder:text-slate-600 block bg-gray-100 w-full rounded-full border-none py-2 pl-9 pr-3 shadow-sm focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search Twitter"
            type="text"
            name="search"
          />
        </label>
        <div className="my-6 bg-gray-100 p-3 rounded-2xl">
          <h1 className="text-lg font-black">Trends for you</h1>
          {trending.map((trend, i) => (
            <Trends key={i} trendProp={trend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;
