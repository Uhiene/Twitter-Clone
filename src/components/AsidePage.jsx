import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import { useGlobalState } from '../store';

const AsidePage = () => {
<<<<<<< HEAD
  const [trending] = useGlobalState("trending");
  return (
    <div className="w-2/4 px-10 space-y-4">
      <div className="bg-gray-100 p-4 rounded-full flex space-x-3 text-gray-500 font-medium">
        <FaSearch />
        <p> Search Twitter</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-2xl">
        <h1>Whats Happening</h1>
        <div>
          <div>
            <p className="capitalize">fifa world cup starts on November</p>
            <h4>Quata vs Ecuador</h4>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <Trends trending={trending} />
      <div className="bg-gray-100 p-4 rounded-2xl"></div>
    </div>
  );
}

const Trends = ({trending}) =>{
  return (
    <div className="my-6">
      {trending.map ((trend, i) => {
        <div key={i}>
          <div>
            <p>{trend.trendHeader}</p>
            <h4>{trend.trend}</h4>
            <p>{trend.tweets}tweets</p>
          </div>
        </div>;
        <MdMoreHoriz />
      })}
      
      
    </div>
  );
=======
  return <div className="w-2/4">AsidePage</div>;
>>>>>>> 6ce24998d671d056b9386aa7ebd295e988e61b6d
}

export default AsidePage