import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import { useGlobalState } from '../store';

const AsidePage = () => {
  const [trending] = useGlobalState("trending");
  return (
    <div className="w-2/4 px-10 space-y-4">
      <div className="bg-gray-100 p-4 rounded-full flex space-x-3 text-gray-500 font-medium">
        <FaSearch />
        <p> Search Twitter</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-2xl">
        <h1 className="text-2xl font-bold text-gray-800">Whats Happening</h1>
        <div className="flex justify-between my-5">
          <div>
            <p className="capitalize text-gray-500 font-medium text-md">
              fifa world cup starts on November
            </p>
            <h4 className="text-lg font-semibold text-gray-800">
              England vs USA
            </h4>
          </div>
          <img
            src="https://pbs.twimg.com/semantic_core_img/1595461138900307970/Oyg9PoAd?format=jpg&name=240x240"
            alt="" className='w-24 rounded-lg'
          />
        </div>
        <div className="my-6">
          {trending.map((trend, i) => (
            <Trends key={i} trendProp={trend} />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-2xl"></div>
    </div>
  );
}

const Trends = ({ trendProp }) => {
  return (
    <div className="flex justify-between my-5">
      <div>
        <p className="text-gray-500 font-medium text-md">
          {trendProp.trendHeader}
        </p>
        <h4 className="text-lg font-semibold text-gray-800">
          {trendProp.trend}
        </h4>
        <p className="text-gray-500 font-medium text-md">
          {trendProp.tweets} tweets
        </p>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-xl" />
    </div>
  );
};

export default AsidePage