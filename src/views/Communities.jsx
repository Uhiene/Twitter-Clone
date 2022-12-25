import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import AsidePage, { Trends } from "../components/AsidePage";
import SideBar from "../components/SideBar";
import { useGlobalState } from "../store";

const Communities = () => {
  const [trending] = useGlobalState("trending");
  return (
    <div className="flex p-5">
      <SideBar />
      <div className="px-5 w-5/6 md:w-3/5 border-x border-slate-200">
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-4 font-bold text-lg">
            <AiOutlineArrowLeft />
            <h1>Communities</h1>
          </div>
          <BsSearch />
        </header>
      </div>
      <AsidePage/>
    </div>
  );
};

export default Communities;
