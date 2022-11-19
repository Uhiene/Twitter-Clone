import React from 'react'
import AsidePage from '../components/AsidePage'
import MainPage from '../components/MainPage'
import SideBar from '../components/SideBar'

const TwitterPage = () => {
  return (
    <div>
      <div className='p-5'>Twitter-Home/Twitter</div>
      <div className="flex justify-between">
        <SideBar />
        <MainPage />
        <AsidePage />
      </div>
    </div>
  );
}

export default TwitterPage