import React from "react";
import { SearchBar, Trends } from "../components/AsidePage";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";

const Bookmark = () => {
  const [trending] = useGlobalState("trending");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="w-5/6 md:w-3/5 border-x border-slate-200 text-center">
        <header className="px-5 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-lg">Bookmark</h1>
            <p className="text-xs text-gray-500">@Chenemi_U</p>
          </div>
        </header>
        <div>
          <img
            src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png"
            className="w-80 mx-auto mt-10"
          />
          <h1 className="font-bold text-2xl">Save Tweets for later</h1>
          <p className="text-sm text-gray-500">
            Don’t let the good ones fly away! <br /> Bookmark Tweets to easily
            find them again in the future.
          </p>
        </div>
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

export default Bookmark;
