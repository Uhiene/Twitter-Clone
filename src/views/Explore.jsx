import React from 'react'
import { WhatsHappening } from '../components/AsidePage'
import SideBar from '../components/SideBar'

const Explore = () => {
  return (
    <div className='flex p-5'>
        <SideBar />
        <Trending />
        <WhatsHappening className="w-2/5 p-4 bg-slate-600" />
    </div>
  )
}

const Trending = () => {
    return (
      <div className="w-2/5 border-r border-slate-200">
        <img
          src="https://pbs.twimg.com/semantic_core_img/1595461138900307970/Oyg9PoAd?format=jpg&name=240x240"
          alt=""
          className="w-full"
        />
        <div className='p-4'>
          <p className="capitalize text-gray-500 font-medium text-md">
            fifa world cup starts on November
          </p>
          <h4 className="text-lg font-semibold text-gray-800">England vs USA</h4>
        </div>
      </div>
    );
    
  };

export default Explore